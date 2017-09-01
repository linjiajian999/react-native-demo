import React, { Component } from 'react'

import {
  StyleSheet,
  Dimensions,

  View,
  Button,
  Text,
  Image
} from 'react-native'

import * as config from '../../../config/config.js'

import Swiper from 'react-native-swiper'

import axios from 'axios'

const width = Dimensions.get('window').width
const bannerHeight = width * 0.5333
class SwiperView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'SwiperView',
    tabBarVisible: false
  })
  constructor(props) {
    super(props)
    this.state = {
      resData: '',
      list: [],
      sku: ''
    }
  }
  // componentDidMount() {
  // }
  _fetchList = () => {
    this.setState({
      resData: 'loading'
    })
    axios.get('http://user.cpmo2o.com.cn/Home/GetBennerImgList?bid=0')
    .then((res) => {
      const e = res.data
      let list = []
      if (e.state === 'ok') {
        list = e.data || []
      }
      this.setState({
        resData: e.data,
        list: list
      })
    })
    .catch(err => {
      this.setState({
        resData: ''
      })
      console.log(err)
    })
  }
  _selSku = (sku) => {
    this.setState({
      sku: sku
    })
  }
  render() {
    return (
      <View style = { styles.container }>
        <Swiper
          style = { styles.swiperContainer }
          autoplay = { true }
          autoplayTimeout = { 2 }
          height = { bannerHeight }
          removeClippedSubviews = { false }
          key = { Math.random() }
        >
          {
            this.state.list.map((val, index) => {
              return (
                <View
                  key = { index }
                  style = { styles.swiperItem }
                  onPress = { () => { this._selSku(val.sku) } }
                >
                  <Image
                    source = { {uri: val.imglink} }
                    style = { styles.swiperImg }
                  />
                </View>
              )
            })
          }
        </Swiper>
        <Text style = { styles.text }>SwiperView</Text>
        <Button
          title = "click me to fecth swiper list"
          onPress = { this._fetchList }
          color = { config.theme.mainColor }
        />
        <Text style = { styles.text }>
          resData: { JSON.stringify(this.state.resData) }
        </Text>
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
  swiperContainer: {
    backgroundColor: '#f00'
  },
  swiperItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  swiperImg: {
    height: bannerHeight,
    width: width
  }
})

export default {
  getScreen: () => {
    return SwiperView
  },
  path: 'SwiperView'
}