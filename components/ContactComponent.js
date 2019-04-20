import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card, Button, Icon } from 'react-native-elements';
import { MailComposer } from 'expo';

class Contact extends Component {

    staticnavigationOptions = {
        title: 'Contact'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['ksvkabra@gmail.com'],
            subject: "enquiry",
            body: 'To whom it may concern'
        })
    }
    render() {
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
                    <Button 
                        title='Send Email'
                        buttonStyle={{ backgroundColor: '#512DA8'}}
                        icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                        onPress = {this.sendMail}
                    />
                    </Card>
                </Animatable.View>
            </ScrollView>
        )
    }
}

export default Contact;
