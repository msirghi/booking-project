// @ts-nocheck
import React, {useEffect, useRef} from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import {RNChipView} from 'react-native-chip-view'
import {Row} from "../../utils/Row";
import {officeList} from "../../mocks/officeList";
import {addressList} from "../../mocks/addressList";
import {seatList} from "../../mocks/seatList";
import {Button} from 'react-native-material-ui';
import {THEME} from "./Theme";

export const BottomDrawer: React.FC<{ opened: boolean, toggleDrawer: Function }> = ({opened, toggleDrawer}) => {
    const refRBSheet = useRef();

    useEffect(() => {
        if (opened) {
            refRBSheet.current.open();
        } else {
            refRBSheet.current.close();
        }
    }, [opened]);

    return (
        <View style={styles.wrapper}>
            <RBSheet
                animationType={'fade'}
                onClose={() => toggleDrawer(false)}
                ref={refRBSheet}
                openDuration={250}
                closeOnDragDown={true}
                customStyles={{
                    container: {
                        height: 'auto',
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Start a ride</Text>
                    </View>

                    <View style={styles.startsFrom}>
                        <Text style={styles.text}>Starts from?</Text>

                        <Row style={styles.row}>
                            {officeList.map((value, index) =>
                                <View style={styles.chip}>
                                    <RNChipView
                                        titleStyle={styles.chipTitle}
                                        height={30}
                                        backgroundColor={'#f0f1f3'}
                                        key={index}
                                        title={value.officeName}
                                        avatar={false}
                                    />
                                </View>
                            )}
                        </Row>
                    </View>

                    <View style={styles.address}>
                        <Text style={styles.text}>Where are you going?</Text>
                    </View>

                    <Row style={styles.row}>
                        {addressList.map((value, index) =>
                            <View style={styles.chip}>
                                <RNChipView
                                    titleStyle={styles.chipTitle}
                                    height={30}
                                    backgroundColor={'#f0f1f3'}
                                    key={index}
                                    title={value}
                                    avatar={false}
                                />
                            </View>
                        )}

                        <View style={styles.chip}>
                            <RNChipView
                                height={30}
                                backgroundColor={'#f0f1f3'}
                                title={'+'}
                                avatar={false}
                            />
                        </View>
                    </Row>

                    <View style={styles.seats}>
                        <Text style={styles.text}>How many seats?</Text>

                        <Row style={styles.row}>
                            {seatList.map((value, index) =>
                                <View style={styles.chip}>
                                    <RNChipView
                                        titleStyle={styles.chipTitle}
                                        height={30}
                                        backgroundColor={'#f0f1f3'}
                                        key={index}
                                        title={value}
                                        avatar={false}
                                    />
                                </View>
                            )}
                        </Row>

                        <Row style={{...styles.row, ...styles.buttonRow}}>
                            <Button
                                onPress={() => toggleDrawer(false)}
                                style={{container: {...styles.button}}} raised text='Cancel'/>
                            <Button
                                style={{container: {...styles.button, ...styles.submit}, text: styles.buttonText}}
                                raised
                                text='Open ride'/>
                        </Row>
                    </View>
                </View>
            </RBSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    startsFrom: {},
    seats: {
        marginTop: 10
    },
    row: {
        justifyContent: 'flex-start',
        marginTop: 20
    },
    chip: {
        marginLeft: 10
    },
    address: {
        marginTop: 10
    },
    chipTitle: {
        fontSize: 15
    },
    text: {
        fontWeight: '700'
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
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        padding: 20
    },
    buttonRow: {
        marginTop: 40,
        justifyContent: 'space-around'
    },
    button: {
        width: Dimensions.get('window').width / 2.5,
        borderRadius: 10,
        height: 40
    },
    buttonText: {
        color: '#fff',
    },
    submit: {
        backgroundColor: THEME.ORANGE_COLOR
    },
})
