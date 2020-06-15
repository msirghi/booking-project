import React from 'react';
import {Dimensions, StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import {Card} from "react-native-material-ui";
import {Row} from "../../utils/Row";
import {THEME} from "../shared/Theme";

interface IProps {
    header: string;
    subheader: string;
    enabled: boolean;
    toggleVal: Function;
    icon: any;
}

export const ToggleCard: React.FC<IProps> = ({subheader, icon, header, enabled, toggleVal}) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.9}>
                <Card style={{container: styles.wrapper}}>
                    <View>
                        <Row style={styles.row}>
                            {icon}
                            <Switch
                                style={styles.switch}
                                trackColor={{false: THEME.GREY_COLOR, true: THEME.ORANGE_COLOR}}
                                thumbColor={"#f5dd4b"}
                                ios_backgroundColor="#3e3e3e"
                                value={enabled}
                            />
                        </Row>

                        <Text style={styles.header}>{header}</Text>
                        <Text style={styles.subheader}>{subheader}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: Dimensions.get('window').width / 2.3,
        height: 150,
        borderRadius: 10
    },
    header: {
        marginTop: 20,
        marginLeft: 17,
        fontWeight: '700',
        fontSize: 17
    },
    subheader: {
        marginLeft: 17
    },
    switch: {
        transform: [{scaleX: 1.3}, {scaleY: 1.3}]
    },
    row: {
        justifyContent: 'space-around',
        marginTop: 15,
        marginLeft: -5
    },
});
