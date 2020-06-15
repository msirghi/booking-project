import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {Divider} from "react-native-material-ui";
import {OfficeModel} from "../../models/OfficeModel";
import {THEME} from "../shared/Theme";

interface IProps {
    officeInfo: OfficeModel;
}

export const BuildingOccupation: React.FC<IProps> = ({officeInfo}) => {
    return (
        <View style={styles.mainWrapper}>
            <TouchableOpacity activeOpacity={0.5}>
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
            </TouchableOpacity>

            <View style={styles.divider}>
                <Divider/>
            </View>

            <TouchableOpacity activeOpacity={0.5}>
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
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    upperWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEME.WHITE_COLOR,
        padding: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    chevron: {
        marginLeft: 'auto'
    },
    lowerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEME.WHITE_COLOR,
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    mainWrapper: {
        marginTop: '5%',
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
