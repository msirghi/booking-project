import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {MainScreen} from "./src/screens/MainScreen";
import {BottomNavigationMenu} from "./src/components/shared/BottomNavigationMenu";
import {BuildingScreen} from "./src/screens/BuildingScreen";
import {THEME} from "./src/components/shared/Theme";

export default function App() {
    const [selectedOffice, setSelectedOffice] = useState<number | null>(null);

    const toggleSelectedOffice = (id: number) => setSelectedOffice(id);

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                {!selectedOffice && <MainScreen onOfficeSelect={toggleSelectedOffice}/>}
                {selectedOffice && <BuildingScreen officeId={selectedOffice}/>}
            </View>
            <View style={styles.bottomNavigation}>
                <BottomNavigationMenu deselectOffice={toggleSelectedOffice}/>
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
