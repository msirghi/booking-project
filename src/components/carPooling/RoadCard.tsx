// @ts-nocheck
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Button, Card} from "react-native-material-ui";
import {THEME} from "../shared/Theme";
import {Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {CarPoolingBookModel} from "../../models/CarPoolingBookModel";

interface IProps {
    roadDetails: CarPoolingBookModel;
}

export const RoadCard: React.FC<IProps> = ({roadDetails}) => {
    const {seats, time, toAddress, fromAddress, from, id, to} = roadDetails;
    return (
        <View>
            <Card style={{container: styles.card}}>
                <View style={styles.firstRow}>
                    <Text style={{...styles.bold}}>{from}</Text>
                    <Text style={styles.text}>to </Text>
                    <Text style={{...styles.bold}}>{to}</Text>

                    <View style={styles.timeWrapper}>
                        <Text style={styles.text}>at </Text>
                        <Text style={{...styles.bold}}>{time}</Text>
                    </View>
                </View>

                <View style={styles.addressWrapper}>
                    <View style={styles.inline}>
                        <FontAwesome5 name={'dot-circle'} size={15} color={THEME.GREY_COLOR}/>
                        <Text style={styles.text}>{fromAddress}</Text>
                    </View>
                    <Entypo name="dots-two-vertical" size={15} color={THEME.GREY_COLOR}/>
                    <View style={styles.inline}>
                        <MaterialIcons name={'place'} size={15} color={THEME.GREY_COLOR}/>
                        <Text style={styles.text}>{toAddress}</Text>
                    </View>
                </View>

                <View style={{...styles.inline, ...styles.seats}}>
                    {seats.map(seat =>
                        <MaterialCommunityIcons
                            name="account-circle" size={28}
                            color={seat.status === 'free' ? THEME.GREY_COLOR : THEME.ORANGE_COLOR}/>
                    )}

                    <Button style={{container: styles.button, text: styles.buttonText}} raised text={'Book'}/>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    card: {
        padding: 10,
        width: Dimensions.get('window').width / 1.2,
        height: 'auto',
        borderRadius: 10
    },
    firstRow: {
        flexDirection: 'row'
    },
    bold: {
        fontWeight: '700'
    },
    timeWrapper: {
        flexDirection: 'row',
        marginLeft: 'auto'
    },
    text: {
        color: THEME.GREY_COLOR,
        marginLeft: 5
    },
    addressWrapper: {
        marginTop: 5
    },
    inline: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    seats: {
        marginTop: 5
    },
    button: {
        marginLeft: 'auto',
        width: '40%',
        backgroundColor: THEME.ORANGE_COLOR,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff'
    }
});
