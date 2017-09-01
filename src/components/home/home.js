import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Dimensions,

  NativeModules
} from 'react-native';
import {
  StackNavigator,
  StackRouter
} from 'react-navigation'


// config
import * as config from '../../config/config.js'

// 测试页
import TestPop from '../testPop.js'
import TestPop1 from '../testPop1.js'
// 首页
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  constructor(props) {
    super(props)
    this.state = {
      touchIDState: 'unkown'
    }
  }
  componentDidMount() {
    console.log('home: componentDidMount');
    console.log(this.props.navigation);
  }
  _goIndex = () => {
    this.props.navigation.navigate('Index')
  }
  render() {
    const { navigate } = this.props.navigation
    const { width, height } = Dimensions.get('window')
    const _CalendarAdd = () => {
      const CalendarManager = NativeModules.CalendarManager
      CalendarManager.addEvent('ask打飞机阿克苏大姐夫', '阿斯蒂芬')
    }
    const _touchID = () => {
      const TouchIDModule = NativeModules.TouchIDModule
      TouchIDModule.callTouchID((error, action) => {
        console.log(action)
        this.setState(() => {
          return {
            touchIDState: action
          }
        })
      })
    }
    return (
      <ScrollView style={ styles.scrollView }>
        <Image
          style={ HomeStyles.mainImg }
          source={ require('../../assets/img/other/sun.jpg') }
        />
        <Text style={ HomeStyles.homeText }>Hello, React Native!</Text>
        <Text
          style={ HomeStyles.homeText }
          onPress = { () => navigate('TestPopNext', { user: 'testPop name' }) }
        >
          tap to push
        </Text>
        <Text style={ HomeStyles.homeText }>
           window.width: { width }
        </Text>
        <Text style={ HomeStyles.homeText }>
           window.height: { height }
        </Text>
        <Text style={ [HomeStyles.homeText, { marginTop: 20 }] } onPress = { _CalendarAdd }>
           click me to run CalendarManager.addEvent
        </Text>
        <Text style={ [HomeStyles.homeText, { marginTop: 20 }] } onPress = { _touchID }>
           click me to test touchID
        </Text>
        <Text> touchID state :{ this.state.touchIDState }</Text>
        <Button
          title = "click me to go index"
          color = { config.theme.mainColor }
          onPress = { this._goIndex }
        />
      </ScrollView>
    )
  }
}

import IndexScreen from './index.js'

// 首页 页面导航
export default Home = StackNavigator({
  Home: {
    screen: HomeScreen,
    initialRouteName: 'Home'
  },
  TestPopNext: {
    screen: TestPop1
  },
  Index: {
    screen: IndexScreen,
    initialRouteName: 'Index'
  }
}, {
  navigationOptions: ({ navigation }) => ({
    title: '首页',
    headerTintColor: '#fff',
    headerStyle: styles.header,
    headerMode: 'none'
  })
})

const HomeStyles = StyleSheet.create({
  mainImg: {
    height: 200,
    width: Dimensions.get('window').width,
    resizeMode: Image.resizeMode.contain,
    alignItems: 'center',
    // backgroundColor: '#f00'
  },
  homeText: {
    textAlign: 'center',
    backgroundColor: '#f0f',
    color: '#fff'
  }
})

// 样式
const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  header: {
    backgroundColor: config.theme.mainColor
    // backgroundColor: 'rgba(0, 0, 0, 0)'
  }
})