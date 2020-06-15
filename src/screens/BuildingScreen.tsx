import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {officeList} from "../mocks/officeList";
import {THEME} from "../components/shared/Theme";
import {BuildingOccupation} from "../components/booking/BuildingOccupation";
import {BuildingQualityView} from "../components/booking/BuildingQualityView";
import {Map} from "../components/booking/Map";
import {FadeInView} from "../components/animations/FadeInView";
import {ScrollableWrapper} from "../components/shared/ScrollableWrapper";

interface IProps {
    officeId: number;
}

export const BuildingScreen: React.FC<IProps> = ({officeId}) => {
    const selectedOffice = officeList.find(office => office.id === officeId);

    return (
        <ScrollableWrapper>
            <FadeInView>
                <View>
                    <Text style={styles.mainTitle}>{selectedOffice!.title}</Text>
                    <View style={styles.subheader}>
                        <Text style={styles.address}>{selectedOffice!.officeAddress}</Text>
                        <Text style={styles.drive}>~{selectedOffice!.driveMinutes} minutes drive</Text>
                    </View>
                </View>

                <View>
                    <BuildingOccupation officeInfo={selectedOffice!}/>

                    <View>
                        <BuildingQualityView
                            temperature={selectedOffice!.temperature}
                            humidity={selectedOffice!.humidity}
                            availability={57}/>
                    </View>
                </View>

                <View style={styles.mapWrapper}>
                    <Map officeSelected={selectedOffice!}/>
                </View>
            </FadeInView>
        </ScrollableWrapper>
    );
}

const styles = StyleSheet.create({
    mapWrapper: {
        overflow: 'hidden',
        borderRadius: 10,
        marginTop: 20,
    },
    mainTitle: {
        fontWeight: '700',
        fontSize: 30
    },
    subheader: {
        flexDirection: 'row'
    },
    drive: {
        color: THEME.ORANGE_COLOR,
        marginLeft: 'auto',
    },
    address: {
        color: THEME.GREY_COLOR
    }
});
