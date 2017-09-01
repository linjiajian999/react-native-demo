import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Button,
  Text,
  NativeModules,
  Dimensions
} from 'react-native'

import * as config from '../../../config/config.js'

import JJMapView from './JJMapView.js'
class NativeUIDemo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'NativeUI',
    tabBarVisible: false
  })
  constructor(props) {
    super(props)
    this.state = {
      pitchEnable: false
    }
  }
  render() {
    const _touchIdPress = (preState) => {
      this.setState({
        pitchEnable: !preState.pitchEnable,
        region: {
          latitude: 37.48,
          longitude: -122.16,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }
      })
    }
    const _regionPress = () => {
      this.setState({
        latitude: 23.8,
        longitude: 113.2,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      })
    }
    return (
      <View style = { styles.container }>
        <Button
          color = { config.theme.mainColor }
          title="clicke me to change pitchEnable"
          onPress={ _touchIdPress }
        />
        <Button
          color = { config.theme.mainColor }
          title="clicke me to change region"
          onPress={ _regionPress }
        />
        <Text style = { styles.text }> pitchEnable: { this.state.pitchEnable.toString() }</Text>
        <JJMapView
          style = { styles.map }
          // pitchEnable = { this.state.pitchEnable }
          region = { this.state.region }
        />
      </View>
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
  map: {
    flex: 1,
    width: Dimensions.get('window').width
  }
})

export default {
  getScreen: () => {
    return NativeUIDemo
  },
  path: 'NativeUIDemo'
}