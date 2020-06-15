// @ts-nocheck
import React, {useEffect, useState} from 'react';
import MapView, {Animated, AnimatedRegion} from 'react-native-maps';
import {StyleSheet, Text, View} from "react-native";
import {OfficeModel} from "../../models/OfficeModel";

interface ICoords {
    latitude: number;
    longitude: number;
}

interface IProps {
    officeSelected: OfficeModel;
}

export const Map: React.FC<IProps> = ({officeSelected}) => {
    const [region, setRegion] = useState(new AnimatedRegion({}));
    const [markerCoords, setMarkerCoords] = useState<ICoords>(null);

    useEffect(() => {
        if (officeSelected) {
            setMarkerCoords({latitude: officeSelected.lat, longitude: officeSelected.lng});
            setRegion(new AnimatedRegion({
                latitude: officeSelected.lat,
                longitude: officeSelected.lng,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0121
            }))
        }
    }, []);

    if (!markerCoords) {
        return <View>
            <Text>Loading...</Text>
        </View>
    }

    return (
        <Animated
            style={styles.mapStyle}
            region={region}>
            <MapView.Marker
                coordinate={markerCoords}
                title={officeSelected.officeName}
                description={officeSelected.officeAddress}
            />
        </Animated>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        height: 300,
    },
});
