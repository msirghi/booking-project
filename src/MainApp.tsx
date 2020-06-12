import React, {useState} from 'react';
import {BottomNavigationMenu} from "./components/shared/BottomNavigationMenu";
import {StyleSheet, View} from "react-native";
import {FadeInView} from "./components/animations/FadeInView";
import {MainScreen} from "./screens/MainScreen";
import {BuildingScreen} from "./screens/BuildingScreen";
import {AdministrationScreen} from "./screens/AdministrationScreen";
import {THEME} from "./components/shared/Theme";
import {CarPoolingScreen} from "./screens/CarPoolingScreen";
import {useDispatch, useSelector} from "react-redux";
import {navigateToNewScreen} from "./redux/actions/navigationActions";
import {RootState} from "./redux";

export const MainApp = () => {
    const [selectedOffice, setSelectedOffice] = useState<number | null>(null);
    const dispatch = useDispatch();
    const currentNavigation = useSelector((state: RootState) => state.navigation.activeScreen);

    const activateScreen = (screen: string) => {
        dispatch(navigateToNewScreen(screen));
        setSelectedOffice(null);
    }

    const toggleSelectedOffice = (id: number) => setSelectedOffice(id);

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                {!selectedOffice && currentNavigation === 'booking' &&
                <FadeInView style={styles.container}>
                  <MainScreen onOfficeSelect={toggleSelectedOffice}/>
                </FadeInView>}

                {selectedOffice && currentNavigation === 'booking' &&
                <FadeInView style={styles.container}>
                  <BuildingScreen officeId={selectedOffice}/>
                </FadeInView>}

                {currentNavigation === 'administration' &&
                <FadeInView style={styles.container}>
                  <AdministrationScreen/>
                </FadeInView>}

                {currentNavigation === 'car-pooling' &&
                <FadeInView style={styles.container}>
                  <CarPoolingScreen/>
                </FadeInView>}
            </View>
            <View style={styles.bottomNavigation}>
                <BottomNavigationMenu
                    activeScreen={currentNavigation}
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
