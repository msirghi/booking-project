// @ts-nocheck
import React from 'react';
import MapView, {Animated, AnimatedRegion} from 'react-native-maps';
import {StyleSheet} from "react-native";

interface IProps {

}

export default class Map extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            region: new AnimatedRegion({
                latitude: 47.03904153, longitude: 28.80460471, latitudeDelta: 0.0022, longitudeDelta: 0.0121
            })
        }
    }

    onRegionChange(region) {
        this.state.region.setValue(region);
    }

    render() {
        return (
            <Animated
                style={styles.mapStyle}
                region={this.state.region}>
                <MapView.Marker
                    coordinate={{
                        latitude: 47.03904153,
                        longitude: 28.80460471
                    }}
                    title={"title"}
                    description={"description"}
                />
            </Animated>
        )
    }
}

const styles = StyleSheet.create({
    mapStyle: {
        width: '93%',
        height: 330,
    },
});
