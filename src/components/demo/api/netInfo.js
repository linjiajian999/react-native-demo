import React, { Component } from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  View,
  Button,
  Text,
  NetInfo
} from 'react-native'

import * as config from '../../../config/config.js'

function handleFirstConnectivityChange(reach) {
  // console.log('First change: ' + reach)
  NetInfo.removeEventListener(
    'change',
    handleFirstConnectivityChange
  )
}
NetInfo.addEventListener(
  'change',
  handleFirstConnectivityChange
)

class NetInfoDemo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'NetInfoDemo',
    tabBarVisible: false
  })
  constructor(props) {
    super(props)
    this.state = {
      reach: ''
    }
  }
  render() {
    const  _press = () => {
      NetInfo.fetch().done((reach) => {
        this.setState({
          reach: reach
        })
      })
    }
    return (
      <View>
        <Text style = { styles.text }>NetInfo</Text>
        <Text style = { styles.code}>
          {
            "NetInfo.fetch().done((reach) => {\n  console.log('Initial: ' + reach)\n})"
          }
        </Text>
        <Button onPress = { _press } title = "click me to fetch" color = { config.theme.mainColor } />
        <Text>
          'Initial:' { this.state.reach }
        </Text>
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
  },
  code: {
    color: '#fff',
    marginTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
})
export default {
  getScreen: () => {
    return NetInfoDemo
  },
  path: 'NetInfoDemo'
}