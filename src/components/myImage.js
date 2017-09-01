import React, { Component } from 'react';

import Dimensions from 'Dimensions'
import {
  Image,
  Text,
  View,
  StyleSheet
 } from 'react-native';

class MyImages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testState: 123
    }
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={ styles.container }>
        <Image source={ pic } style={ styles.img } />
        <Text style={ styles.text }> { this.props.btnText } </Text>
        <Text style={ styles.text }> { this.state.testState } </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    height: 100
  },
  text: {
    'textAlign': 'center'
  },
  img: {
    flex: 1,
    resizeMode: Image.resizeMode.contain
  }
})
export default MyImages
