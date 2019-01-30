import React from 'react';
import { AppContextInterface, AppContext } from './Store';
import NavigationStacks from './src/NavigationStacks';

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
        <NavigationStacks />
      </AppContext.Provider>
    );
  }

}

export default App;
