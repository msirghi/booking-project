import React, {useState} from 'react';
import {BottomNavigationMenu} from "./components/shared/BottomNavigationMenu";
import {StyleSheet, View} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {BuildingScreen} from "./screens/BuildingScreen";
import {AdministrationScreen} from "./screens/AdministrationScreen";
import {CarPoolingScreen} from "./screens/CarPoolingScreen";
import {useDispatch, useSelector} from "react-redux";
import {navigateToNewScreen} from "./redux/actions/navigationActions";
import {RootState} from "./redux";
import {MAIN_CONTAINER_STYLES} from "./constants";

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
        <View style={styles.test}>
            <View style={{...styles.container}}>
                {!selectedOffice && currentNavigation === 'booking'
                && <MainScreen onOfficeSelect={toggleSelectedOffice}/>}

                {selectedOffice && currentNavigation === 'booking' && <BuildingScreen officeId={selectedOffice}/>}
                {currentNavigation === 'administration' && <AdministrationScreen/>}
                {currentNavigation === 'car-pooling' && <CarPoolingScreen/>}
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
    container: MAIN_CONTAINER_STYLES,
    bottomNavigation: {
        width: '100%',
    },
    test: {
        flex: 1
    }
});
