import React from 'react';
import { Text, View, Button, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import styles from '../styles';

interface MainState {
  loading: boolean;
}

interface NavigationProps {
  navigation: any;
}

class MainScreen extends React.Component<NavigationProps, MainState> {
  public state = {
    loading: true,
  }

  public componentDidMount () {
    if (this.state.loading) this.props.navigation.navigate('toTabStack');
  }

  public render() {
    return (
      <LinearGradient style={styles.gradient}
        colors={['#0f0f0f', '#0f0f0f']}
        locations={[0, 1.0]} 
      >
        <StatusBar barStyle="light-content" />
        <Text style={styles.textH2}>Welecome Screen</Text>
        <Button title='Login' color='#63d0ff' 
          onPress={() => this.props.navigation.navigate('toTabStack')} />
      
      </LinearGradient>
    )
  }
}

class FriendsScreen extends React.Component<NavigationProps, object> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textH1}>Main Screen</Text>
        <Button title='Main' onPress={() => this.props.navigation.navigate('Main')} />
        <Button title='chatlist' onPress={() => this.props.navigation.navigate('ChatList')} />
      </View>
    )
  }
}

class ChatListScreen extends React.Component<NavigationProps, object> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textH1}>Chat List Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Deeper')}
        />
      </View>
    );
  }
}

class NoneTabScreen extends React.Component<NavigationProps, object> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.textH1}>This is None TAB</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component<NavigationProps, object> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

// const AppNavigator: any = createStackNavigator(
//   {
//     Main: MainScreen,
//     Details: DetailsScreen
//   },
//   {
  //     initialRouteName: "Main"
  //   }
  // );

  export { MainScreen, FriendsScreen, ChatListScreen, NoneTabScreen, SettingsScreen };