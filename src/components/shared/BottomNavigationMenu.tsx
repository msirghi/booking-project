import React, {useState} from 'react';
import {StyleSheet} from "react-native";
import {BottomNavigation} from 'react-native-material-ui';

interface IProps {
    deselectOffice: Function;
}

export const BottomNavigationMenu = (props: IProps) => {
    const {deselectOffice} = props;
    const [activeTab, setActiveTab] = useState('booking');

    return (
        <BottomNavigation hidden={false} active={activeTab}>
            <BottomNavigation.Action
                key="booking"
                icon="map"
                label="Booking"
                onPress={() => {
                    setActiveTab('booking');
                    deselectOffice(null);
                }}
                active/>
            <BottomNavigation.Action
                key="administration"
                icon="settings-remote"
                label="Office"
                onPress={() => setActiveTab('administration')}
                active/>
            <BottomNavigation.Action
                key="car-pooling"
                icon={'directions-car'}
                label="Car pooling"
                onPress={() => setActiveTab('car-pooling')}
                active/>
        </BottomNavigation>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%'
    }

});
