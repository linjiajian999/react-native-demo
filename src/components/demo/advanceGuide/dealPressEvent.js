// 处理触摸事件
import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  TouchableHighlight,
  Text,
  Image,
  Dimensions
} from 'react-native'

import * as config from '../../../config/config.js'

class DealPressEvent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ActivityIndicator',
    tabBarVisible: false
  })
  constructor(props) {
    super(props)
    this.state = {
      pressCount: 0
    }
  }
  _onPress = () => {
    this.setState( (preState) => {
      return {
        pressCount: preState.pressCount + 1
      }
    })
  }
  render() {
    return (
      <ScrollView style = { styles.container }>
        <Button
          color = { config.theme.mainColor }
          title = "touch me to press (Button)"
          onPress = { this._onPress }
        />
        <Text style = { styles.text }> 你点击了 { this.state.pressCount }次</Text>
        <Image
          style = { styles.img }
          source = {require('../../../assets/img/demo/dealPressEvent.png')}
        />
        <TouchableHighlight
          activeOpacity = { 0.5 }
          underlayColor = { config.theme.mainColor }
          onPress = { this._onPress }
        >
          <Text style = {{ textAlign: 'center' }}>
            使用 TouchableHighlight 封装的Text press me
          </Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    color: config.theme.mainColor
  },
  text: {
    paddingTop: 10,
    textAlign: 'center'
  },
  img: {
    width: Dimensions.get('window').width,
    resizeMode: Image.resizeMode.contain
  }
})

export default {
  getScreen: () => {
    return DealPressEvent
  },
  path: 'DealPressEvent'
}
