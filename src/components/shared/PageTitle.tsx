import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {THEME} from "./Theme";

export const PageTitle: React.FC<{ title: string, subtitle: string }> = ({title, subtitle}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingBottom: 15
    },
    title: {
        fontWeight: '700',
        fontSize: 30,
    },
    subtitle: {
        flexDirection: 'row',
        color: THEME.GREY_COLOR
    },
});
