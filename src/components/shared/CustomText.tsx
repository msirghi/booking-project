import React from 'react';
import {Text} from 'react-native';

interface IProps {
    color?: string;
    fontSize?: number;
    children: React.ReactNode;
    style?: object;
}

export const CustomText = (props: IProps) => {
    const {color = '#fff', fontSize = 15, children, style} = props;

    const initialStyle = {color, fontSize}

    return (
        // @ts-ignore
        <Text style={{...initialStyle, ...style}}>{children}</Text>
    )
}
