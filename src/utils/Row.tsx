import React from 'react';
import {StyleSheet, View} from "react-native";

export const Row: React.FC<{ children: object, style?: object }> = ({children, style}) => {
    return (
        <View style={{...styles.wrapper, ...style}}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
