import React from 'react';
import {StyleSheet, View} from "react-native";
import {ToggleCard} from "../components/administration/ToggleCard";
import {Row} from "../utils/Row";
import {FontAwesome5, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {THEME} from "../components/shared/Theme";
import {PageTitle} from "../components/shared/PageTitle";
import {MAIN_CONTAINER_STYLES, OFFICE_SUBTITLE, OFFICE_TITLE} from "../constants";
import {FadeInView} from "../components/animations/FadeInView";
import {ScrollableWrapper} from "../components/shared/ScrollableWrapper";

export const AdministrationScreen = () => {
    return (
        <ScrollableWrapper>
            <FadeInView>
                <View style={styles.wrapper}>
                    <PageTitle title={OFFICE_TITLE} subtitle={OFFICE_SUBTITLE}/>
                    <Row>
                        <ToggleCard
                            enabled={true}
                            toggleVal={() => {
                            }}
                            icon={<FontAwesome5 name={'temperature-high'} size={45} color={THEME.ORANGE_COLOR}/>}
                            header={'Air Conditioner'}
                            subheader={'24 °C'}
                        />

                        <ToggleCard
                            enabled={false}
                            toggleVal={() => {
                            }}
                            icon={<MaterialCommunityIcons name={'lightbulb-outline'} size={45}
                                                          color={THEME.ORANGE_COLOR}/>}
                            header={'Light'}
                            subheader={'Off'}
                        />
                    </Row>

                    <Row style={styles.row}>
                        <ToggleCard
                            enabled={true}
                            toggleVal={() => {
                            }}
                            icon={<MaterialCommunityIcons name={'radio'} size={45} color={THEME.ORANGE_COLOR}/>}
                            header={'Radio'}
                            subheader={'35% Volume'}
                        />

                        <ToggleCard
                            enabled={true}
                            toggleVal={() => {
                            }}
                            icon={<MaterialIcons name={'tv'} size={45} color={THEME.ORANGE_COLOR}/>}
                            header={'TV'}
                            subheader={'On'}
                        />
                    </Row>
                </View>
            </FadeInView>
        </ScrollableWrapper>
    )
}

const styles = StyleSheet.create({
    container: MAIN_CONTAINER_STYLES,
    wrapper: {
        flex: 1,
    },
    row: {
        marginTop: 10
    }
});
