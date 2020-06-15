import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {THEME} from "./Theme";

interface IProps {
    style?: object;
    onClick: Function;
}

export const RoundButton: React.FC<IProps> = ({children, style, onClick}) => {

    return (
        <View style={{...styles.mainContainer, ...style}}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onClick()}
                style={styles.touchableOpacityStyle}
            >
                <View style={styles.buttonWrapper}>
                    {children}
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor: THEME.WHITE_COLOR,
        borderRadius: 230,
        padding: 10,
        elevation: 3
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableOpacityStyle: {
        width: 50,
        height: 50,
    },
});
