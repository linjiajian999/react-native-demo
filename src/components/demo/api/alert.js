import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Button,
  Alert,
  Text
} from 'react-native'

import * as config from '../../../config/config.js'

class AlertView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ActivityIndicator',
    tabBarVisible: false
  })
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  _press = () => {
    Alert.alert(
      'a-title',
      'a-msg',
      [
        { text: 'a-ok', onPress: () => { console.log('a-ok') } },
        { text: 'a-calcel', onPress: () => { console.log('a-calcel') } },
        // { text: 'a-customer', onPress: () => { console.log('a-customer') } },
        // { text: 'a-customer1', onPress: () => { console.log('a-customer') } },
        // { text: 'a-customer2', onPress: () => { console.log('a-customer') } },
        // { text: 'a-customer4', onPress: () => { console.log('a-customer') } },
        // { text: 'a-customer5', onPress: () => { console.log('a-customer') } }
      ]
    )
  }
  render() {
    return (
      <View>
        <Text style = { styles.text }>template</Text>
        <Button
          title = "click me to alert"
          onPress = { this._press }
        />
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
    return AlertView
  },
  path: 'AlertDemo'
}