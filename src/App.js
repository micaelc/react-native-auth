import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Container, Header, Spinner } from './component/common';
import * as myConfig from './myConfig';
import LoginForm from './component/LoginForm';

// Component
class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: myConfig.API_KEY,
            authDomain: myConfig.AUTH_DOMAIN,
            databaseURL: myConfig.DATABASE_URL,
            projectId: myConfig.PROJECT_ID,
            storageBucket: myConfig.STORAGE_BUCKET,
            messagingSenderId: myConfig.MESSAGING_SENDER_ID
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Container>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </Container>
                );

            case false:
                return <LoginForm />;
            default:
                return (
                    <Container>
                        <Spinner size='large' />
                    </Container>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

// Make component available to other parts os the app
export default App;

