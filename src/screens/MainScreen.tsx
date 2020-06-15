import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {OfficeCard} from "../components/booking/OfficeCard";
import {officeList} from "../mocks/officeList";
import {FadeInView} from "../components/animations/FadeInView";
import {MAIN_CONTAINER_STYLES} from "../constants";
import {ScrollableWrapper} from "../components/shared/ScrollableWrapper";

interface IProps {
    onOfficeSelect: Function;
}

export const MainScreen: React.FC<IProps> = ({onOfficeSelect}) => {
    return (
        <ScrollableWrapper>
            <FadeInView>
                <View>
                    <View style={styles.wrapper}>
                        <View>
                            <Text style={styles.welcomeText}>Welcome, John!</Text>
                            <Text style={styles.secondaryText}>Select where you want to work today</Text>
                        </View>
                        <View>
                            <Image
                                source={{uri: 'https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png'}}
                                style={styles.accountImage}/>
                        </View>
                    </View>

                    {officeList.map((office, index) =>
                        <View style={index !== 0 ? styles.cardWrapper : {}} key={index}>
                            <OfficeCard
                                onClick={() => onOfficeSelect(office.id)}
                                key={index}
                                backgroundImageUri={office.backgroundImageUri}
                                freeParkSlots={office.freeParkSlots}
                                freeWorkPlaces={office.freeWorkPlaces}
                                humidity={office.humidity}
                                officeAddress={office.officeAddress}
                                officeName={office.officeName}
                                temperature={office.temperature}
                                driveMinutes={office.driveMinutes}
                            />
                        </View>)}
                </View>
            </FadeInView>
        </ScrollableWrapper>
    );
};

const styles = StyleSheet.create({
    container: MAIN_CONTAINER_STYLES,
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120
    },
    welcomeText: {
        fontSize: 25
    },
    secondaryText: {
        fontSize: 12
    },
    accountImage: {
        width: 100,
        height: 100,
        marginLeft: 30
    },
    cardWrapper: {
        marginTop: 20,
        alignItems: 'center'
    }
});
