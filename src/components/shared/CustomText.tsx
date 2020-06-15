import React from 'react';
import {Text} from 'react-native';
import {THEME} from "./Theme";

interface IProps {
    color?: string;
    fontSize?: number;
    children: React.ReactNode;
    style?: object;
}

export const CustomText = (props: IProps) => {
    const {color = THEME.WHITE_COLOR, fontSize = 15, children, style} = props;

    const initialStyle = {color, fontSize}

    return (
        // @ts-ignore
        <Text style={{...initialStyle, ...style}}>{children}</Text>
    )
}
