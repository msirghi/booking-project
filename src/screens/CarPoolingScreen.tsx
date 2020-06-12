import React, {useState} from 'react';
import {StyleSheet, View} from "react-native";
import {PageTitle} from "../components/shared/PageTitle";
import {RoadCard} from "../components/carPooling/RoadCard";
import {carPoolingList} from "../mocks/carPooling";
import {FloatingFabButton} from "../components/shared/FloatingFabButton";
import {BottomDrawer} from "../components/shared/BottomDrawer";

export const CarPoolingScreen = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    return (
        <View style={styles.wrapper}>
            <PageTitle title={'Car pooling'} subtitle={'Lorem ipsum dolor sit amet'}/>
            <View style={styles.content}>
                {carPoolingList.map((value, index) =>
                    <View style={styles.roadCard} key={index}>
                        <RoadCard roadDetails={value} key={index}/>
                    </View>)}
            </View>

            <BottomDrawer toggleDrawer={() => setDrawerOpen(false)} opened={drawerOpen}/>
            <FloatingFabButton onClick={() => setDrawerOpen(true)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    content: {
        alignItems: 'center'
    },
    roadCard: {
        marginTop: 10
    }
});
