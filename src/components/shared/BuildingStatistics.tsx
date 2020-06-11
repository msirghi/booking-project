import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {Divider} from "react-native-material-ui";
import {OfficeModel} from "../../models/OfficeModel";

interface IProps {
    officeInfo: OfficeModel;
}

export const BuildingStatistics = (props: IProps) => {
    const {officeInfo} = props;
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.upperWrapper}>
                <View style={styles.iconWrapper}>
                    <MaterialIcons size={32} name={'event-seat'} styles={styles.icon}/>
                </View>

                <View style={styles.rightContent}>
                    <Text style={styles.upperText}>{officeInfo.freeWorkPlaces} free work places</Text>
                    <Text>Select yours!</Text>
                </View>
                <MaterialIcons style={styles.chevron} name={'chevron-right'} size={32}/>
            </View>

            <View style={styles.divider}>
                <Divider/>
            </View>
            <View style={styles.lowerWrapper}>
                <View style={styles.iconWrapper}>
                    <MaterialIcons size={32} name={'local-parking'} styles={styles.icon}/>
                </View>

                <View style={styles.rightContent}>
                    <Text style={styles.upperText}>{officeInfo.freeParkSlots} free park slotes</Text>
                    <Text>Select yours!</Text>
                </View>
                <MaterialIcons style={styles.chevron} name={'chevron-right'} size={32}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    upperWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '93%'
    },
    chevron: {
        marginLeft: 'auto'
    },
    lowerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: '93%'
    },
    mainWrapper: {
        marginTop: '10%',
    },
    divider: {
        width: '85%',
        marginLeft: 15
    },
    iconWrapper: {},
    icon: {},
    upperText: {
        fontWeight: "700"
    },
    rightContent: {
        marginLeft: '5%'
    }
});
