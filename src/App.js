import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import * as myConfig from './myConfig';
// Component
class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: myConfig.API_KEY,
            authDomain: myConfig.AUTH_DOMAIN,
            databaseURL: myConfig.DATABASE_URL,
            projectId: myConfig.PROJECT_ID,
            storageBucket: myConfig.STORAGE_BUCKET,
            messagingSenderId: myConfig.MESSAGING_SENDER_ID
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <Text>My app!</Text>
            </View>
        );
    }
}

const styles = {};

// Make component available to other parts os the app
export default App;

