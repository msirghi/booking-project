import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {MainScreen} from "./src/screens/MainScreen";
import {BottomNavigationMenu} from "./src/components/shared/BottomNavigationMenu";
import {BuildingScreen} from "./src/screens/BuildingScreen";
import {THEME} from "./src/components/shared/Theme";
import {FadeInView} from "./src/components/animations/FadeInView";
import {AdministrationScreen} from "./src/screens/AdministrationScreen";
import {CarPoolingScreen} from "./src/screens/CarPoolingScreen";

export default function App() {
    const [selectedOffice, setSelectedOffice] = useState<number | null>(null);
    const [activeScreen, setActiveScreen] = useState<'booking' | 'administration' | 'car-pooling'>('booking');

    const activateScreen = (screen: 'booking' | 'administration' | 'car-pooling') => {
        setSelectedOffice(null);
        setActiveScreen(screen);
    }

    const toggleSelectedOffice = (id: number) => setSelectedOffice(id);

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                {!selectedOffice && activeScreen === 'booking' &&
                <FadeInView style={styles.container}>
                  <MainScreen onOfficeSelect={toggleSelectedOffice}/>
                </FadeInView>}

                {selectedOffice && activeScreen === 'booking' &&
                <FadeInView style={styles.container}>
                  <BuildingScreen officeId={selectedOffice}/>
                </FadeInView>}

                {activeScreen === 'administration' &&
                <FadeInView style={styles.container}>
                  <AdministrationScreen/>
                </FadeInView>}

                {activeScreen === 'car-pooling' &&
                <FadeInView style={styles.container}>
                  <CarPoolingScreen/>
                </FadeInView>}
            </View>
            <View style={styles.bottomNavigation}>
                <BottomNavigationMenu
                    activeScreen={activeScreen}
                    activateScreen={activateScreen}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.LIGHT_GREY_COLOR,
    },
    bottomNavigation: {
        width: '100%'
    }
});
