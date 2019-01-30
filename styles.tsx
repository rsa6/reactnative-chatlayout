import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252A34',
    // backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: '5%'
    // colors={['#0299e7', '#00c8cb']}
    // colors={['#05418e', 'darkred']}
  },
  inContainer: {
    alignItems: 'center',
  },
  textH1: {
    fontSize: 30,
    color: '#fff',
  },
  textH2: {
    fontSize: 35,
    color: '#fff',
  },
  box: {
    backgroundColor: 'red',
    width: 200,
    height: 200,
    borderRadius: 30
  },
});

export default styles;