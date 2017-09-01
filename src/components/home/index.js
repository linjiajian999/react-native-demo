import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Button,
  Text,
  Animated
} from 'react-native'

import {
  Transitioner
} from 'react-navigation'

import * as config from '../../config/config.js'

class HomeIndex extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Index',
    tabBarVisible: false
  })
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    console.log('test componentDidMount');
    // console.log(this.props.screenProps);
    console.log(this.props);
    console.log(this.props.navigation);
  }
  _configureTransition (transitionProps, prevTransitionProps) {
    return {
      // duration in milliseconds, default: 250
      duration: 500,
      // An easing function from `Easing`, default: Easing.inOut(Easing.ease)
      easing: Easing.bounce,
    }
  }
  _render (transitionProps, prevTransitionProps) {
    console.log('_render');
    console.log(transitionProps);
    const scenes = transitionProps.scenes.map(scene => this._renderScene(transitionProps, scene));
    return (
      <View style={styles.stack}>
        {scenes}
      </View>
    );
  }
  _renderScene (transitionProps, scene) {
    const { position } = transitionProps;
    const { index } = scene;
    const opacity = position.interpolate({
      inputRange: [index-1, index, index+1],
      outputRange: [0, 1, 0],
    });
    // The prop `router` is populated when we call `createNavigator`.
    const Scene = this.props.router.getComponent(scene.route.routeName);
    return (
      <Animated.View style={{ opacity }}>
        { Scene }
      </Animated.View>
    )
  }
  onTransitionStart () {
    console.log('onTransitionStart')
  }
  onTransitionEnd() {
    console.log('onTransitionEnd')
  }
  render() {
    return (
      <View>
        <Text> test </Text>
      </View>
    )
  }
  // render() {
  //   console.log('render')
  //   console.log(this.props.navigation)
  //   return (
  //     <Transitioner
  //       configureTransition={this._configureTransition}
  //       // navigation={this.props.navigation}
  //       navigation = {{
  //         index: 1,
  //         routes: [
  //           { key: 'DF2FGWGAS-12', routeName: 'Home' },
  //         ]
  //       }}
  //       render={this._render}
  //       onTransitionStart={this.onTransitionStart}
  //       onTransitionEnd={this.onTransitionEnd}
  //     />
  //   )
  // }
}
const styles = StyleSheet.create({
  button: {
    color: config.theme.mainColor
  },
  text: {
    paddingTop: 10
  },
  stack: {
    color: config.theme.mainColor
  }
})

export default HomeIndex