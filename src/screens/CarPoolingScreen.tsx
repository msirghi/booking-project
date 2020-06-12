import React from 'react';
import {StyleSheet, View} from "react-native";
import {PageTitle} from "../components/shared/PageTitle";
import {RoadCard} from "../components/carPooling/RoadCard";
import {carPoolingList} from "../mocks/carPooling";

export const CarPoolingScreen = () => {
    return (
        <View>
            <PageTitle title={'Car pooling'} subtitle={'Lorem ipsum dolor sit amet'}/>
            <View style={styles.content}>
                {carPoolingList.map(value =>
                    <View style={styles.roadCard}>
                        <RoadCard roadDetails={value}/>
                    </View>)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center'
    },
    roadCard: {
        marginTop: 10
    }
});
