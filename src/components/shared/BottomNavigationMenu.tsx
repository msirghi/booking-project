// @ts-nocheck
import React from 'react';
import {BottomNavigation} from 'react-native-material-ui';
import {ADMINISTRATION_TAB, BOOKING_TAB, CAR_POOLING_TAB} from "../../constants";
import {THEME} from "./Theme";

interface IProps {
    activateScreen: Function;
    activeScreen: 'booking' | 'administration' | 'car-pooling';
}

export const BottomNavigationMenu: React.FC<IProps> = ({activeScreen, activateScreen}) => {
    const getActiveStyles = (active: string) => {
        return {
            icon: {color: activeScreen === active ? THEME.ORANGE_COLOR : THEME.GREY_COLOR},
            label: {color: activeScreen === active ? THEME.ORANGE_COLOR : THEME.GREY_COLOR},
        }
    }

    return (
        <BottomNavigation hidden={false} active={activeScreen}>
            <BottomNavigation.Action
                style={getActiveStyles('booking')}
                key={'booking'}
                icon={'map'}
                label={BOOKING_TAB}
                onPress={() => activateScreen('booking')}
                active/>
            <BottomNavigation.Action
                style={getActiveStyles('administration')}
                key={'administration'}
                icon={'settings-remote'}
                label={ADMINISTRATION_TAB}
                onPress={() => activateScreen('administration')}
                active/>
            <BottomNavigation.Action
                style={getActiveStyles('car-pooling')}
                key={'car-pooling'}
                icon={'directions-car'}
                label={CAR_POOLING_TAB}
                onPress={() => activateScreen('car-pooling')}
                active/>
        </BottomNavigation>
    );
}

