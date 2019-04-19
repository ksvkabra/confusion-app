import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card } from 'react-native-elements';

function Contact(props) {

    staticnavigationOptions = {
        title: 'Contact'
    }
    return (
        <ScrollView>
            <Animatable.View animation='fadeInDown' duration={2000}>
                <Card
                    title="Contact Information"
                >
                <Text>Contact Information</Text>
                <Text>121, Clear Water Bay Road</Text>
                <Text>Clear Water Bay, Kowloon</Text>
                <Text>HONG KONG</Text>
                <Text>Tel: +852 1234 5678</Text>
                <Text>Fax: +852 8765 4321</Text>
                <Text>Email:confusion@food.net</Text>
                </Card>
            </Animatable.View>
        </ScrollView>
    )
}

export default Contact;
