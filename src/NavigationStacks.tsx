import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MainScreen, FriendsScreen, ChatListScreen, NoneTabScreen, SettingsScreen } from './Main';

const FriendsStack = createStackNavigator(
  {
    Friend: FriendsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { 
        backgroundColor: '#2d2d2d',
        borderBottomWidth: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const ChatStack = createStackNavigator(
  {
    ChatList: ChatListScreen,
    Deeper: NoneTabScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: { 
        backgroundColor: '#2d2d2d',
        borderBottomWidth: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitle: 'BLOCKS'
    },
  }
);

ChatStack.navigationOptions = ({ navigation }: any) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

const TabStack = createBottomTabNavigator(
  {
    Friends: FriendsStack,
    Chat: ChatStack,
    Settings: SettingsStack,
  },
  {
    defaultNavigationOptions: ({ navigation }: any) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }: any) => {
        const { routeName } = navigation.state;
        let IconComponent: any = FontAwesome;
        let iconName;
        if (routeName === 'Friends') {
          iconName = `${focused ? 'frown-o' : 'smile-o'}`;
        } else if (routeName === 'Chat') {
          iconName = `${focused ? 'comments' : 'sign-language'}`;
        } else if (routeName === 'Settings') {
          iconName = `${focused ? 'ellipsis-v' : 'ellipsis-h'}`; // server
        }
        return <IconComponent name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2E94B9',
      inactiveTintColor: '#a39e9e',
      style: {
        backgroundColor: '#2d2d2d',
      },
    },
  }
)


const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    toTabStack: {
      screen: TabStack,
    },  
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
  
);

export default createAppContainer(RootStack);