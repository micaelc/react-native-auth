import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// Component
const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

// Make component available to other parts os the app
export { Spinner };

