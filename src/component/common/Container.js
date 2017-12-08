import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};
const styles = {
    containerStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding: 5,
    }
};
export { Container };
