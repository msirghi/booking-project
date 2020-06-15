import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {THEME} from "./Theme";

interface IProps {
    onClick: Function;
}

export const FloatingFabButton: React.FC<IProps> = ({onClick}) => {

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onClick()}
                style={styles.touchableOpacityStyle}
            >
                <View style={styles.buttonWrapper}>
                    <AntDesign name="plus" size={32} color="black"/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor: THEME.WHITE_COLOR,
        borderRadius: 230,
        padding: 10,
        elevation: 2
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        right: 20,
        bottom: 15,
    },
});
