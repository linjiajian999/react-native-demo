import {
  StyleSheet
} from 'react-native'

import { StackNavigator } from 'react-navigation'


import * as config from '../../config/config.js'

import Demo from './demo.js'

// conponents section
import ActivityIndicatorDemo from './componentSection/activityIndicator.js'

// api
import NetInfoDemo from './api/netInfo.js'
import AlertDemo from './api/alert.js'

// guide ios
import NativeModuleDemo from './GuideIOS/nativeModule.js'
import NativeUIDemo from './GuideIOS/nativeUI.js'

// advance guide
import DealPressEventDemo from './advanceGuide/dealPressEvent.js'

// plugin
import SwiperDemo from './plugins/swiper.js'
import UploadImgDemo from './plugins/uploadImg.js'

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    backgroundColor: config.theme.mainColor
  }
})

export default DemoList = StackNavigator({
  demoList: {
    getScreen: () => {
      return Demo
    },
    path: 'demoList'
  },
  ActivityIndicatorDemo: {
    getScreen: () => {
      return ActivityIndicatorDemo
    },
    path: 'activityIndicatorDemo'
  },
  NetInfoDemo,
  AlertDemo,
  NativeModuleDemo,
  NativeUIDemo,
  DealPressEventDemo,
  SwiperDemo,
  UploadImgDemo
}, {
  navigationOptions: {
    headerTintColor: '#fff',
    headerStyle: styles.header,
    headerMode: 'screen',
    initialRouteName: 'demoList'
  }
})