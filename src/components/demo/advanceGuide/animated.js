import React, { Component } from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  View,
  Button,
  Text,
  Animated
} from 'react-native'

import * as config from '../../../config/config.js'

class AnimatedPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ActivityIndicator',
    tabBarVisible: false
  })
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Text style = { styles.text }>template</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    color: config.theme.mainColor
  },
  text: {
    paddingTop: 10
  }
})

export default {
  getScreen: () => {
    return AnimatedPage
  },
  path: 'AnimatedPage'
}