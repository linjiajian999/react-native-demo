import React, { Component, PropTypes } from 'react'
import { requireNativeComponent } from 'react-native'

const JJMap = requireNativeComponent('JJMap', JJMapView)

export default class JJMapView extends Component {
  static propTypes = {
    /**
     * 当这个属性被设置为true，并且地图上绑定了一个有效的可视区域的情况下，
     * 可以通过捏放操作来改变摄像头的偏转角度。
     * 当这个属性被设置成false时，摄像头的角度会被忽略，地图会一直显示为俯视状态。
     */
    pitchEnable: PropTypes.bool,
    /**
     * 地图要显示的区域。
     *
     * 区域由中心点坐标和区域范围坐标来定义。
     */
    region: {
      /**
       * 地图中心点的坐标。
       */
      latitude: PropTypes.number.isRequire,
      longtitud: PropTypes.number.isRequire,
       /**
       * 最小/最大经、纬度间的距离。
       */
      latitudeDelta: PropTypes.number.isRequired,
      longitudeDelta: PropTypes.number.isRequired,
    }
  }
  render() {
    return <JJMap { ...this.props } />
  }
}