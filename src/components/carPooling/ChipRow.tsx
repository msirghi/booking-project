import React from 'react';
import {View} from "react-native";
import {THEME} from "../shared/Theme";
import {MaterialIcons} from "@expo/vector-icons";
import {OfficeModel} from "../../models/OfficeModel";
// @ts-ignore
import {RNChipView} from 'react-native-chip-view';
import {chipStyles} from "./chipStyles";
import {Row} from "../../utils/Row";
import {AddressModel} from "../../models/AddressModel";

interface IProps {
    selected: OfficeModel | AddressModel | SeatModel;
    setSelected: Function;
    array: Array<OfficeModel | AddressModel | SeatModel>;
    plusButton?: boolean;
}

export const ChipRow: React.FC<IProps> = ({selected, setSelected, array, plusButton}) => {
    return (
        <Row style={chipStyles.chipStart}>
            {array.map((value, index) => {
                    const isSelected = selected?.id === value.id;
                    return <View style={chipStyles.chip} key={index}>
                        <RNChipView
                            onPress={() => setSelected(value)}
                            titleStyle={{
                                ...chipStyles.chipTitle,
                                ...isSelected && {
                                    color: THEME.WHITE_COLOR,
                                    marginLeft: -5
                                }
                            }}
                            height={30}
                            backgroundColor={isSelected ? THEME.LIGHT_ORANGE_COLOR : '#f0f1f3'}
                            key={index}
                            avatarStyle={{justifyContent: 'center', alignItems: 'center'}}
                            title={value.title}
                            avatar={isSelected ?
                                <MaterialIcons name={'check'} size={24} color={THEME.WHITE_COLOR}/> : false}
                        />
                    </View>
                }
            )}
            {plusButton && <View style={chipStyles.chip}>
              <RNChipView
                titleStyle={chipStyles.chipTitle}
                height={30}
                backgroundColor={'#f0f1f3'}
                title={'+'}
                avatar={false}
              />
            </View>}
        </Row>
    );
};
