import React, { Component } from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native'

import * as config from '../../../config/config.js'

class ActivityIndicatorDemo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ActivityIndicator',
    tabBarVisible: false
  })
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      tips: 'hide'
    }
  }
  render() {
    const press = () => {
      this.setState((preState, preProps) => {
        return {
          isLoading: !preState.isLoading,
          tips: preState.isLoading ? 'show' : 'hide'
        }
      })
    }
    return (
      <View>
        <Button
          color = { config.theme.mainColor }
          title = { "click me to " + this.state.tips + " indicator" }
          onPress = { press }
        />
        <Text>{ "animating = {" + this.state.isLoading + "}"}</Text>
        <Text style={ styles.text }>默认样式:</Text>
        <ActivityIndicator
          animating = { this.state.isLoading }
        />
        <Text style={ styles.text }>指定颜色（ color = "#f00"）:</Text>
        <ActivityIndicator
          color = "#f00"
          animating = { this.state.isLoading }
        />
        <Text style={ styles.text }> 设置大小（ size = "small" ）:</Text>
        <ActivityIndicator
          size = "small"
          animating = { this.state.isLoading }
        />
        <Text style={ styles.text }> 设置大小（ size = "large" ）:</Text>
        <ActivityIndicator
          size = "large"
          animating = { this.state.isLoading }
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    color: '#f00'
  },
  text: {
    paddingTop: 10
  }
})

export default ActivityIndicatorDemo