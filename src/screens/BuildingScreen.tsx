import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {officeList} from "../mocks/officeList";
import {THEME} from "../components/shared/Theme";
import {BuildingStatistics} from "../components/shared/BuildingStatistics";
import {BuildingAvailability} from "../components/shared/BuildingAvailability";

interface IProps {
    officeId: number;
}

export const BuildingScreen = (props: IProps) => {
    const {officeId} = props;
    const selectedOffice = officeList.find(office => office.id === officeId);

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Text style={styles.mainTitle}>{selectedOffice!.officeName}</Text>
                <View style={styles.subheader}>
                    <Text style={styles.address}>{selectedOffice!.officeAddress}</Text>
                    <Text style={styles.drive}>~{selectedOffice!.driveMinutes} minutes drive</Text>
                </View>
            </View>

            <View style={styles.content}>
                <BuildingStatistics officeInfo={selectedOffice!}/>

                <View style={styles.stats}>
                    <BuildingAvailability
                        temperature={selectedOffice!.temperature}
                        humidity={selectedOffice!.humidity}
                        availability={57}/>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '20%',
        marginLeft: '7%',
    },
    stats: {},
    content: {},
    header: {},
    mainTitle: {
        fontWeight: "700",
        fontSize: 30
    },
    subheader: {
        flexDirection: 'row'
    },
    drive: {
        color: THEME.ORANGE_COLOR,
        marginLeft: 'auto',
        marginRight: 20
    },
    address: {
        color: THEME.GREY_COLOR
    }
});
