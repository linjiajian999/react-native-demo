import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native'

export default class TestPop extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: `testPop With name: ${navigation.state.params.user}`
  // });
  static navigationOptions = {
    title: 'TestPop title',
    headerRight: <Text title="testRight" >testRight</Text>
  }
  render() {
    return(
      <View style={ styles.container }>
        <Text>testPop</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})