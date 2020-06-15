// @ts-nocheck
import React, {useEffect, useRef, useState} from 'react';
import {PanResponder, PanResponderInstance, StyleSheet, Text, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import RBSheet from "react-native-raw-bottom-sheet";
import {AntDesign, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import {Row} from "../../utils/Row";
import {RoundButton} from "../shared/RoundButton";
import {THEME} from "../shared/Theme";
import {TwoRowButtons} from "../shared/TwoRowButtons";

interface IProps {
    isTempChangeOpen: boolean;
    toggleDrawer: Function;
}

const MAX_POINTS = 400;

export const TempChanger: React.FC<IProps> = ({isTempChangeOpen, toggleDrawer}) => {
    const refRBSheet = useRef();
    const [state, setState] = useState({
        isMoving: false,
        pointsDelta: 0,
        points: 240,
    });

    useEffect(() => {
        if (isTempChangeOpen) {
            refRBSheet.current.open();
        } else {
            refRBSheet.current.close();
        }
    }, [isTempChangeOpen]);

    let _panResponder: PanResponderInstance = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: (evt, gestureState) => {
            setState(prevState => ({...prevState, isMoving: true, pointsDelta: 0}))
        },

        onPanResponderMove: (evt, gestureState) => {
            if (_circularProgressRef.current) {
                _circularProgressRef.current.animate(0, 0);
            }
            setState(prevState => ({...prevState, pointsDelta: Math.round(-gestureState.dy / 2)}));
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
            if (_circularProgressRef.current) {
                _circularProgressRef.current.animate(200, 1500);
            }
            let points = state.points + state.pointsDelta;
            // console.log(Math.min(points, MAX_POINTS));
            setState({
                isMoving: false,
                points: points > 0 ? Math.min(points, MAX_POINTS) : 0,
                pointsDelta: 0,
            });
        },
    });
    let _circularProgressRef: React.RefObject<AnimatedCircularProgress> = React.createRef();
    const fill = (state.points / MAX_POINTS) * 100;

    const addPoints = () => setState(prevState => ({...prevState, points: state.points + 10}));

    const removePoints = () => setState(prevState => ({...prevState, points: state.points - 10}));

    if (!_panResponder || !_circularProgressRef) {
        return <View/>
    }

    return (
        <RBSheet
            animationType={'fade'}
            ref={refRBSheet}
            openDuration={250}
            closeOnDragDown={true}
            onClose={() => toggleDrawer()}
            customStyles={{
                container: {
                    justifyContent: "center",
                    alignItems: 'center',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    height: 'auto',
                },
            }}
        >
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Change Temperature</Text>
                </View>

                <View style={styles.container} {..._panResponder.panHandlers}>
                    <AnimatedCircularProgress
                        size={240}
                        width={20}
                        backgroundWidth={10}
                        fill={fill}
                        tintColor={THEME.LIGHT_BLUE_COLOR}
                        tintColorSecondary={THEME.RED_COLOR}
                        backgroundColor={THEME.DARK_BLUE_COLOR}
                        arcSweepAngle={280}
                        rotation={220}
                        lineCap={'round'}
                    >
                        {fill => <Text style={styles.points}>{Math.round((MAX_POINTS * fill) / 1000)}</Text>}
                    </AnimatedCircularProgress>
                </View>

                <View style={styles.temperatureButtons}>
                    <Row>
                        <RoundButton onClick={() => removePoints()} style={{marginBottom: 30}}>
                            <Entypo name={'minus'} size={32} color={'#000'}/>
                        </RoundButton>

                        <RoundButton onClick={() => {
                        }}>
                            <MaterialCommunityIcons name={'power'} size={32} color={THEME.ORANGE_COLOR}/>
                        </RoundButton>

                        <RoundButton onClick={() => addPoints()} style={{marginBottom: 30}}>
                            <AntDesign name={'plus'} size={32} color={'#000'}/>
                        </RoundButton>
                    </Row>
                </View>
                <View>
                    <TwoRowButtons onCancel={() => toggleDrawer()} submitBtnTitle={'Accept'}/>
                </View>
            </View>
        </RBSheet>
    );
}

const styles = StyleSheet.create({
    points: {
        textAlign: 'center',
        color: '#000',
        fontSize: 50,
        fontWeight: '100',
    },
    temperatureButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        marginTop: -10,
        paddingBottom: 10
    },
    container: {
        alignItems: 'center',
        paddingTop: 20,
    },
    content: {
        padding: 20,
        alignItems: 'center'
    },
    pointsDelta: {
        color: '#4c6479',
        fontSize: 50,
        fontWeight: '100',
    },
    pointsDeltaActive: {
        color: '#fff',
    },
});
