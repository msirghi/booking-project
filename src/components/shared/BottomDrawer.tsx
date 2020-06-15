// @ts-nocheck
import React, {useEffect, useRef, useState} from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import {Row} from "../../utils/Row";
import {addressList} from "../../mocks/addressList";
import {seatList} from "../../mocks/seatList";
import {Button} from 'react-native-material-ui';
import {THEME} from "./Theme";
import {OfficeModel} from "../../models/OfficeModel";
import {ChipRow} from "../carPooling/ChipRow";
import {officeList} from "../../mocks/officeList";
import {AddressModel} from "../../models/AddressModel";

export const BottomDrawer: React.FC<{ opened: boolean, toggleDrawer: Function }> = ({opened, toggleDrawer}) => {
    const refRBSheet = useRef();
    const [selectedFrom, setSelectedFrom] = useState<OfficeModel | null>(null);
    const [selectedAddress, setSelectedAddress] = useState<AddressModel | null>(null);
    const [selectedSeats, setSelectedSeats] = useState<SeatModel | null>(null);

    useEffect(() => {
        if (opened) {
            refRBSheet.current.open();
        } else {
            refRBSheet.current.close();
            setTimeout(() => {
                setSelectedFrom(null);
                setSelectedAddress(null);
                setSelectedSeats(null);
            }, 500);
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
                customStyles={{container: styles.sheetContainer}}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Start a ride</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Starts from?</Text>
                        <ChipRow selected={selectedFrom} setSelected={setSelectedFrom} array={officeList}/>
                    </View>

                    <View style={styles.mt10}>
                        <Text style={styles.text}>Where are you going?</Text>
                        <ChipRow
                            selected={selectedAddress}
                            setSelected={setSelectedAddress}
                            array={addressList}
                            plusButton/>
                    </View>

                    <View style={styles.mt10}>
                        <Text style={styles.text}>How many seats?</Text>
                        <ChipRow selected={selectedSeats} setSelected={setSelectedSeats} array={seatList}/>

                        <Row style={{...styles.row, ...styles.buttonRow}}>
                            <Button
                                onPress={() => toggleDrawer(false)}
                                style={{container: {...styles.button}}}
                                raised
                                text='Cancel'/>
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
    mt10: {
        marginTop: 10
    },
    row: {
        justifyContent: 'flex-start',
        marginTop: 15
    },
    text: {
        fontWeight: '700',
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
        backgroundColor: THEME.LIGHT_GREY_COLOR,
        width: Dimensions.get('window').width / 2.5,
        borderRadius: 10,
        height: 40
    },
    buttonText: {
        color: THEME.WHITE_COLOR,
    },
    submit: {
        backgroundColor: THEME.ORANGE_COLOR
    },
    sheetContainer: {
        height: 'auto',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
})
