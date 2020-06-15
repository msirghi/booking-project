import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

interface IProps {
    children?: object;
    style?: object;
}

export const FadeInView: React.FC<IProps> = ({children, style}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 300,
            }
        ).start();
    }, [])

    return (
        <Animated.View
            style={{
                ...style,
                opacity: fadeAnim,
            }}
        >
            {children}
        </Animated.View>
    );
}

