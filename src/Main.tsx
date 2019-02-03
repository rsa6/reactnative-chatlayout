import React from 'react';
import { Text, View, Button, StatusBar, ListView, TouchableHighlight, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo';
import styles from '../styles';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

interface MainState {
  loading: boolean;
}

interface NavigationProps {
  navigation: any;
}

class MainScreen extends React.Component<NavigationProps, MainState> {
  public state = {
    loading: false,
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
  static navigationOptions = ({navigation}: any) => {
    //headerTitle: <LogoTitle />,
    return {
      headerLeft: (
        <View style={{paddingLeft: 15}}>
           <FontAwesome name="plus" color="#fff" size={22}
            onPress={() => alert('Plus Something')}
          />  
        </View>
      ),
      headerRight: (
        <View style={{paddingRight: 15}}>
          <FontAwesome name="gear" color="#fff" size={22}
            onPress={() => alert('Gear Something')}
          />  
        </View>
      ),      
      headerBackTitle: null,     
    }
  };
  
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

interface ChatListState {
  testMode: boolean;
  basic: boolean;
  listViewData: string[];
}

class ChatListScreen extends React.Component<NavigationProps, ChatListState> {
  private ds: any;
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      testMode: false,
      basic: true,
      listViewData: this.arrayInit(),
    };
  }

  private arrayInit () {
    let tempList: string[] = [];
    for (let i = 0; i < 20; i ++) {
      tempList.push(`안녕하세요?`);
    }
    return tempList;
  }  

  private deleteRow(secId, rowId: number, rowMap) {
    rowMap[`${secId}${rowId}`].closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }


  public render() {
    if (this.state.testMode) {
      return (
        <View style={styles.container}>
          <Text style={styles.textH1}>Chat List Screen</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('ChatDetails')}
          />
        </View>
      );
    } else {
      return (
        <View>        
          <SwipeListView
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data => (
              <TouchableHighlight
                onPress={(event) => this.props.navigation.navigate('ChatDetails', {
                  age: 33,
                  name: 'gav and mother',
                  title: data
                })}
                style={styles.rowFront}
                underlayColor={'#AAA'}>
                <View style={{paddingBottom: 10, paddingTop: 10,}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>{data}</Text>
                  <Text style={{}}>체크인: 1/6 오후 3시 체크아웃: 1/8 pm12시</Text>
                </View>
              </TouchableHighlight>
            )}
            renderHiddenRow={(data, secId, rowId, rowMap) => (
              <View style={styles.rowBack}>
                <Text>Left</Text>
                <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                  <Text>Right</Text>
                </View>
                <TouchableOpacity
                  style={[styles.backRightBtn, styles.backRightBtnRight]}
                  onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-150}
          />      
        </View>
      )
    }
  }
  
}

interface ChatDetailState {
  data: string[];
}

class ChatDetailScreen extends React.Component<NavigationProps, ChatDetailState> {
  constructor(props: NavigationProps) {
    super(props);
    this.state = {
      data: []
    }
  }

  public render() {
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
      <View style={styles.container}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
} // this is None Tab Screen

// const AppNavigator: any = createStackNavigator(
//   {
//     Main: MainScreen,
//     Details: DetailsScreen
//   },
//   {
  //     initialRouteName: "Main"
  //   }
  // );

  export { MainScreen, FriendsScreen, ChatListScreen, ChatDetailScreen, SettingsScreen };