import React from 'react';
// import { createStackNavigator, createAppContainer } from "react-navigation";
import { AppContextInterface, AppContext } from './Store';
import Main from './src/Main';

class App extends React.Component<object, AppContextInterface> {
  constructor(props: object) {
    super(props);
    this.state = {
      data: 'Context data',
    }
  }

  public render() {
    return (
      <AppContext.Provider value={this.state}>
        <Main context={this.state.testFunction} />
      </AppContext.Provider>
    );
  }

}

export default App;

// const AppNavigator: any = createStackNavigator({
//   Home: {
//     screen: App
//   }
// });

// export default createAppContainer(AppNavigator);