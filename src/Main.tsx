import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View } from 'react-native';
import styles from '../styles';

interface MainState {
  loadingTime: number;
}

class Main extends React.Component<object, MainState> {
  public state = {
    loadingTime: 10,
  }

  public componentDidMount () {
  }

  public render() {
    return (
      <View />
    )
  }
}

// export default Main;
const AppNavigator: any = createStackNavigator({
  Home: {
    screen: Main
  }
});

export default createAppContainer(AppNavigator);
