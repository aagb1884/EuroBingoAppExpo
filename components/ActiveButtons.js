import React from 'react';
import { View } from 'react-native';
import Button from './Button';

export default function ActiveButtons ({ cardArray, handleClick, buttonStates }) {
 



    return (
        <View style={styles.activeButtonsWrapper}>
            {buttonStates.map((buttonActive, index) => (
                <Button
                    key={index}
                    index={index}
                    isActive={buttonActive}
                    onPress={() => handleClick(index)}
                    cliche={cardArray[index]}
                 />
            ))}
        </View>
    );
}

const styles = {
    activeButtonsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
};


