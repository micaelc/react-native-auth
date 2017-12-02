import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Header} from './component/common';
// Component
class App extends Component {
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>My app!</Text>
            </View>
        );
    }
}

const styles = {};

// Make component available to other parts os the app
export default App;

