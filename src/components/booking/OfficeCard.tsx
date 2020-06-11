import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CustomText} from "../shared/CustomText";
import {THEME} from "../shared/Theme";

interface IProps {
    officeName: string;
    officeAddress: string;
    freeWorkPlaces: number;
    freeParkSlots: number;
    humidity: string | number;
    temperature: string | number;
    backgroundImageUri?: string;
    driveMinutes: number;
    onClick: Function;
}

export const OfficeCard = (props: IProps) => {
    const {freeParkSlots, freeWorkPlaces, humidity, officeAddress, officeName, temperature, backgroundImageUri, driveMinutes, onClick} = props;

    return (
        <TouchableOpacity style={styles.touchWrapper} activeOpacity={0.8} onPress={() => onClick()}>
            <View style={styles.wrapper}>
                <ImageBackground
                    source={{uri: backgroundImageUri}}
                    style={styles.backgroundImage}
                    imageStyle={styles.image}
                >
                    <View style={styles.content}>
                        <View style={styles.heading}>
                            <Text style={styles.officeName}>{officeName}</Text>
                            <CustomText style={styles.address}>{officeAddress}</CustomText>
                        </View>

                        <View style={styles.metadata}>
                            <View style={styles.firstLine}>
                                <CustomText>{freeWorkPlaces} free work places</CustomText>
                                <CustomText style={styles.drive}>~{driveMinutes} minutes drive</CustomText>
                            </View>
                            <CustomText>{freeParkSlots} free park slots</CustomText>
                            <CustomText>{temperature}°C, {humidity}% Humidity</CustomText>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchWrapper: {
        alignItems: 'center',
        width: '100%'
    },
    wrapper: {
        width: '90%',
        height: 150,
        flex: 0,
    },
    content: {
        backgroundColor: 'rgba(0,0,0,.4)',
        height: '100%',
        borderRadius: 20
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    image: {
        borderRadius: 20
    },
    drive: {
        marginLeft: 'auto',
        marginRight: 10,
        color: THEME.ORANGE_COLOR
    },
    firstLine: {
        flexDirection: 'row'
    },
    officeName: {
        fontSize: 25,
        color: '#fff',
        marginTop: 10,
        marginLeft: 10
    },
    metadata: {
        marginLeft: 10,
        marginTop: 10
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    address: {
        marginLeft: 'auto',
        marginRight: 10
    }
});
