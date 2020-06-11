import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {FontAwesome5, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import {Divider} from "react-native-material-ui";

interface IProps {
    temperature: number;
    humidity: number;
    availability: number;
}

export const BuildingAvailability = (props: IProps) => {
    const {humidity, temperature, availability} = props;
    return (
        <View style={styles.wrapper}>
            <View style={{...styles.firstRow, ...styles.row}}>
                <MaterialCommunityIcons name={'temperature-celsius'} size={32}/>
                <Text style={styles.text}>{temperature}°C Temperature</Text>
            </View>
            <View style={styles.divider}>
                <Divider/>
            </View>
            <View style={styles.row}>
                <MaterialIcons name={'opacity'} size={32}/>
                <Text style={styles.text}>{humidity}% Humidity</Text>
            </View>
            <View style={styles.divider}>
                <Divider/>
            </View>
            <View style={{...styles.lastRow, ...styles.row}}>
                <MaterialIcons name={'people'} size={32}/>
                <Text style={styles.text}>{availability}% Full</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '93%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    firstRow: {},
    row: {
        flexDirection: 'row',
        padding: 5,
        paddingBottom: 5,
        paddingTop: 5,
        alignItems: 'center',
    },
    lastRow: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    icon: {

    },
    divider: {
        // width: '',
        // marginLeft: 0
    },
    text: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '700'
    }
});
