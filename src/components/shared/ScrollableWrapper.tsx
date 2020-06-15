import React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";

export const ScrollableWrapper: React.FC = ({children}) => {
    return (
        <View style={styles.view}>
            <ScrollView contentContainerStyle={styles.wrapper}>
                {children}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexGrow: 1,
    },
    wrapper: {
        flexGrow: 1,
        marginTop: '10%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 60,
    }
});
