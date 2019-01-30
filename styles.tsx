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
  
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#ceaeb3',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 80,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#ae7f86',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,    
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: '#eccdd2',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#c13f3f',
    right: 0,
  }

});

export default styles;