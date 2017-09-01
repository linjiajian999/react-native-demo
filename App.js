import React, { Component } from 'react'
import {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
// config
import * as config from './src/config/config.js'
// 测试页
import TestPop from './src/components/testPop.js'
import TestPop1 from './src/components/testPop1.js'
// home
import Home from './src/components/home/home.js'
// demo
import DemoList from  './src/components/demo/index.js'
// user
import User from './src/components/user/user.js'

import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.timeout = 10000
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
// 响应拦截
// axios.interceptors.response.use(function(response) {
//   // Do something with response data
//   // console.log(response)
//   // if (response.data && response.data.state === 'nologin') {
//   //   store.commit(types.SET_IS_LOGIN, false)
//   // }
//   return response
// }, function(error) {
//   // Do something with response error
//   return Promise.reject(error)
// })
// 请求拦截
axios.interceptors.request.use(function(config) {
  // Do something before request is sent
  console.log(config)
  return config
}, function(error) {
  // Do something with request error
  return Promise.reject(error)
})

// tabbar Navigation
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: config.theme.mainColor
  },
  icon: {
    width: 22,
    height: 22
  }
})
const ReactNativeApp = TabNavigator(
   // RouteConfigs
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '首页',
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return <Image style={ styles.icon } source={require('./src/assets/img/tabBar/m1s.png')} />
          } else {
            return <Image style={ styles.icon } source={require('./src/assets/img/tabBar/m1.png')} />
          }
        }
      }
    },
    Demo: {
      screen: DemoList,
      navigationOptions: {
        title: '示例',
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return <Image style={ styles.icon } source={require('./src/assets/img/tabBar/m2s.png')} />
          } else {
            return <Image style={ styles.icon } source={require('./src/assets/img/tabBar/m2.png')} />
          }
        }
      }
    }
  },
  // TabNavigatorConfig
  {
    tabBarOptions: {
      activeTintColor: '#ffc936',
      style: {
        backgroundColor: config.theme.mainColor
      },
      showIcon: true,
      iconStyle: styles.icon,
      labelStyle: {
        fontSize: 10
      }
    },
    tabBarPosition: 'bottom', // tab 定位
    // swipeEnabled: false,      // tab 之间是否可以滑动
    lazy: true,               // 页面是否懒加载
  }
)
// console.log(AwesomeProject)
AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp)






