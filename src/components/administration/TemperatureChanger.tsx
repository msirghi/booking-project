import React from 'react';
import {Button, Dimensions, PanResponder, PanResponderInstance, StyleSheet, Text, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import RBSheet from "react-native-raw-bottom-sheet";
import {AntDesign, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import {Row} from "../../utils/Row";
import {RoundButton} from "../shared/RoundButton";
import {THEME} from "../shared/Theme";
import {TwoRowButtons} from "../shared/TwoRowButtons";

interface IProps {
    isTempChangeOpen: boolean;
}

const MAX_POINTS = 500;
export default class TemperatureChanger extends React.Component<IProps> {
    state = {
        isMoving: false,
        pointsDelta: 0,
        points: 240,
    };

    _panResponder: PanResponderInstance;
    _circularProgressRef: React.RefObject<AnimatedCircularProgress>;

    constructor(props: Readonly<IProps>) {
        super(props);
        this._circularProgressRef = React.createRef();
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                this.setState({isMoving: true, pointsDelta: 0});
            },

            onPanResponderMove: (evt, gestureState) => {
                if (this._circularProgressRef.current) {
                    this._circularProgressRef.current.animate(0, 0);
                }
                // For each 2 pixels add or subtract 1 point
                this.setState({pointsDelta: Math.round(-gestureState.dy / 2)});
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                if (this._circularProgressRef.current) {
                    this._circularProgressRef.current.animate(100, 1500);
                }
                let points = this.state.points + this.state.pointsDelta;
                console.log(Math.min(points, MAX_POINTS));
                this.setState({
                    isMoving: false,
                    points: points > 0 ? Math.min(points, MAX_POINTS) : 0,
                    pointsDelta: 0,
                });
            },
        });
    }

    // componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any) {
    //     if (this.props.isTempChangeOpen) {
    //         this.RBSheet.open();
    //     } else {
    //         this.RBSheet.close()
    //     }
    // }

    addPoints = () => this.setState({points: this.state.points + 10});

    removePoints = () => this.setState({points: this.state.points - 10});

    render() {
        const fill = (this.state.points / MAX_POINTS) * 100;
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()}/>
                <RBSheet
                    animationType={'fade'}
                    ref={ref => this.RBSheet = ref}
                    openDuration={250}
                    closeOnDragDown={true}
                    customStyles={{
                        container: {
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            height: Dimensions.get('window').height / 1.8
                        }
                    }}
                >
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Change Temperature</Text>
                        </View>

                        <View style={styles.container} {...this._panResponder.panHandlers}>
                            <AnimatedCircularProgress
                                size={240}
                                width={15}
                                backgroundWidth={5}
                                fill={fill}
                                tintColor="#00ff00"
                                tintColorSecondary="#ff0000"
                                backgroundColor="#3d5875"
                                arcSweepAngle={280}
                                rotation={220}
                                lineCap="round"
                            >
                                {fill => <Text style={styles.points}>{Math.round((MAX_POINTS * fill) / 1000)}</Text>}
                            </AnimatedCircularProgress>
                        </View>

                        <View style={styles.temperatureButtons}>
                            <Row>
                                <RoundButton onClick={this.removePoints} style={{marginBottom: 30}}>
                                    <Entypo name="minus" size={32} color="black"/>
                                </RoundButton>

                                <RoundButton onClick={this.addPoints}>
                                    <MaterialCommunityIcons name="power" size={32} color={THEME.ORANGE_COLOR}/>
                                </RoundButton>

                                <RoundButton onClick={this.addPoints} style={{marginBottom: 30}}>
                                    <AntDesign name="plus" size={32} color="black"/>
                                </RoundButton>
                            </Row>
                        </View>
                        <View>
                            <TwoRowButtons submitBtnTitle={'Accept'}/>
                        </View>
                    </View>
                </RBSheet>
            </View>
        );
    }
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
        flex: 1,
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
