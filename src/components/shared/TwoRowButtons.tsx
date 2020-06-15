import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Row} from "../../utils/Row";
import {Button as MatButton} from 'react-native-material-ui';
import {THEME} from "./Theme";

interface IProps {
    submitBtnTitle: string;
    onCancel: Function;
}

export const TwoRowButtons: React.FC<IProps> = ({submitBtnTitle,onCancel}) => {

    return (
        <View>
            <Row style={{...styles.row, ...styles.buttonRow}}>
                <MatButton
                    onPress={() => onCancel()}
                    style={{container: {...styles.button}}}
                    raised
                    text='Cancel'/>
                <MatButton
                    style={{container: {...styles.button, ...styles.submit}, text: styles.buttonText}}
                    raised
                    text={submitBtnTitle}/>
            </Row>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'flex-start',
        width: '100%',
    },
    button: {
        backgroundColor: THEME.LIGHT_GREY_COLOR,
        width: Dimensions.get('window').width / 2.5,
        borderRadius: 10,
        height: 40
    },
    buttonText: {
        color: THEME.WHITE_COLOR,
    },
    submit: {
        backgroundColor: THEME.ORANGE_COLOR
    },
    buttonRow: {
        justifyContent: 'space-around'
    },
});
