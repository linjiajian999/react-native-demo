import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Button,
  Text,
  NativeModules
} from 'react-native'

import * as config from '../../../config/config.js'

class NativeModuleDemo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'NativeModule',
    tabBarVisible: false
  })
  constructor(props) {
    super(props)
    this.state = {
      touchIdState: true
    }
  }
  render() {
    const _touchIdPress = () => {
      const TouchIDModule = NativeModules.TouchIDModule
      TouchIDModule.callTouchID((error, action) => {
        this.setState(() => {
          return {
            touchIdState: action
          }
        })
      })
    }
    return (
      <View>
        <Button
          color = { config.theme.mainColor }
          title="clicke me to call out touchID"
          onPress={ _touchIdPress }
        />
        <Text style = { styles.text }> touchID state: { this.state.touchIdState }</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    color: config.theme.mainColor
  },
  text: {
    paddingTop: 10,
    textAlign: 'center'
  }
})

export default {
  getScreen: () => {
    return NativeModuleDemo
  },
  path: 'NativeModuleDemo'
}