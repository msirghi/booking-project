import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {Divider} from "react-native-material-ui";

interface IProps {
    temperature: number | string;
    humidity: number | string;
    availability: number;
}

export const BuildingQualityView = (props: IProps) => {
    const {humidity, temperature, availability} = props;
    return (
        <View style={styles.wrapper}>
            <View style={{...styles.firstRow, ...styles.row}}>
                <View style={styles.iconWrapper}>
                    <MaterialCommunityIcons name={'temperature-celsius'} size={32}/>
                </View>
                <Text style={styles.text}>{temperature}°C Temperature</Text>
            </View>

            <View>
                <Divider/>
            </View>

            <View style={{...styles.row, ...styles.middleRows}}>
                <View style={styles.iconWrapper}>
                    <MaterialIcons name={'opacity'} size={32}/>
                </View>
                <Text style={styles.text}>{humidity}% Humidity</Text>
            </View>

            <View>
                <Divider/>
            </View>

            <View style={{...styles.lastRow, ...styles.row}}>
                <View style={styles.iconWrapper}>
                    <MaterialIcons name={'people'} size={32}/>
                </View>
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
    iconWrapper: {
        alignItems: 'center',
    },
    firstRow: {
        marginBottom: 5
    },
    row: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    },
    middleRows: {
        paddingTop: 10,
        paddingBottom: 10
    },
    lastRow: {
        marginTop: 5
    },
    text: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '700'
    }
});
