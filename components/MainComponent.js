import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishDetailComponent';
import Reservation from './ReservationComponent';
import Favorites from './FavoriteComponent';
import Login from './LoginComponent';
import About from './AboutComponent';
import { View, Platform, Image, StyleSheet, ScrollView, Text, NetInfo, ToastAndroid } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
// import { Platform } from 'expo-core';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchDishes, fetchPromos, fetchComments, fetchLeaders } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
})


const MenuNavigator = createStackNavigator({
    Menu : {screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name='menu'
                size ={24}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    },
    Dishdetail: {screen: Dishdetail}
}, {
    initialRouteName: 'Menu',
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name='menu'
                size ={24}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
    })
});

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name='menu'
            size ={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
        />
    })
});

const ContactNavigator = createStackNavigator({
    Contact: {screen: Contact}
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name='menu'
            size ={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
        />
    })
});

const ReservationNavigator = createStackNavigator({
    Resevation: {screen: Reservation}
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name='menu'
            size ={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
        />
    })
});

const FavoritesNavigator = createStackNavigator({
    Favorites: {screen: Favorites}
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name='menu'
            size ={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
        />
    })
});

const LoginNavigator = createStackNavigator({
    Login: {screen: Login}
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name='menu'
            size ={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
        />
    })
});


const AboutNavigator = createStackNavigator({
    About: {screen: About}
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name='menu'
            size ={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
        />
    })
});

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container}
            forceInset = {{top: 'always', horizontal: 'never'}}
        ><View style={styles.drawerHeader}>
            <View style={{flex:1}}>
                <Image source={require('./images/logo.png')} style={styles.drawerImage}/>
            </View>
            <View style={{flex:2}}>
                <Text style={styles.drawerHeaderText}>Risto Con Fusion</Text>
            </View>
        </View>
        <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
    Login: {
        screen: LoginNavigator,
        navigationOptions: {
            title: 'Login',
            drawerLabel: 'Login',
            drawerIcon: ({ tintColor }) => (
                <Icon 
                    name='sign-in'
                    type='font-awesome'
                    size={24}
                    color={ tintColor }
                />
            )
        }        
    },
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon 
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={ tintColor }
                />
            )
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor }) => (
                <Icon 
                    name='list'
                    type='font-awesome'
                    size={24}
                    color={ tintColor }
                />
            )
        }        
    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact',
            drawerLabel: 'Contact',
            drawerIcon: ({ tintColor }) => (
                <Icon 
                    name='address-card'
                    type='font-awesome'
                    size={22}
                    color={ tintColor }
                />
            )
        }
    },
    Reservation: {
        screen: ReservationNavigator,
        navigationOptions: {
            title: 'Reservation',
            drawerLabel: 'Reservation',
            drawerIcon: ({ tintColor }) => (
                <Icon 
                    name='cutlery'
                    type='font-awesome'
                    size={24}
                    color={ tintColor }
                />
            )
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            title: 'My Favorites',
            drawerLabel: 'My Favorites',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon 
                    name='heart'
                    type='font-awesome'
                    size={24}
                    color={ tintColor }
                />
            )
        }
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About',
            drawerLabel: 'About',
            drawerIcon: ({ tintColor }) => (
                <Icon 
                    name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={ tintColor }
                />
            )
        }
    }  
},  {
        initialRouteName: 'Login',
        drawerBackgroundColor: '#D1C4E9',
        contentComponent: CustomDrawerContentComponent
});


class Main extends Component{

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();

        NetInfo.getConnectionInfo()
            .then((connectionInfo) => {
                ToastAndroid.show('Initial Network connectivity type:' 
                  + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType, 
                  ToastAndroid.LONG )
            });
        
        NetInfo.addEventListener('connectionChange', this.handleConnectivityChange)
    }

    componentWillUnmount() {
        NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    handleConnectivityChange = (connectionInfo) => {
        switch(connectionInfo.type) {
            case 'none':
                ToastAndroid.show('You are now offline', ToastAndroid.LONG);
                break;
            case 'wifi':
                ToastAndroid.show('You are connected to wifi', ToastAndroid.LONG);
                break;
            case 'unknown':
                ToastAndroid.show('You are now have an unknown connection', ToastAndroid.LONG);
                break;
            case 'cellular':
                ToastAndroid.show('You are connected to cellular network', ToastAndroid.LONG);
                break;
        }
    }
    
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            {console.log(this.props)}
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerheader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);