import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  Text,
  Image,
  Modal
  // CameraRoll
} from 'react-native'

import ImagePicker from 'react-native-image-picker'
import ImageCropPicker from 'react-native-image-crop-picker'

import * as config from '../../../config/config.js'

import axios from 'axios'

class UploadImg extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'UploadImg',
    tabBarVisible: false
  })
  constructor(props) {
    super(props)
    this.state = {
      avatarSource: null,
      sourceData: null,
      uploadState: 'unknow',
      uploadCallbackData: {},
      modalVisible: false,
      modalText: ''
    }
  }
  componentWillUnmount() {
    ImageCropPicker.clean().then(() => {
      console.log('removed all tmp images from tmp directory');
    }).catch(err => {
      console.log(err)
    })
  }
  _showImgPicker = () => {
    const options = {
      title: '选取图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '相机',
      chooseFromLibraryButtonTitle: '相册',
      // customButtons: [
      //   {name: 'fb', title: 'Choose Photo from Facebook'},
      // ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled image picker')
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        console.log(response)
        let source = {
          uri: response.uri,
          type: response.fileName.split('.')[1],
          name: response.fileName
        }
        // You can also display the image using data:
        // let sourceData = { uri: 'data:image/jpeg;base64,' + response.data }
        // console.log(response)
        this.setState({
          avatarSource: source,
          // sourceData
        })
        // this._uplpadImgToServer(source)
      }
    })
  }
  _showImgCropPicker = () => {
    ImageCropPicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    })
    .then(image => {
      console.log(image);
      this.setState({
        avatarSource: {
          uri: image.path,
          type: image.mime,
          name: image.filename
        },
        // sourceData: {
        //   uri: image.path
        // }
      })
    })
    .catch(err => {
      console.log(err)
    })
    ;
  }
  _uplpadImgToServer = () => {
    const source = this.state.avatarSource
    // console.log(source)
    if (!source.uri) {
      this.setState({
        modalVisible: true,
        modalText: 'URI is null'
      })
    }
    let formData = new FormData()
    let file = {
      uri: source.uri,
      type: 'image/jpeg',
      name: 'photo.jpg'
    }
    formData.append('Filedata', file)
    this.setState({
      uploadState: 'uploading'
    })
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: 'http://pic.mobile-network.cn/upload_ajax.ashx?action=UploadAndIdentity&UpFilePath=Filedata&ocr=0&type=1',
      data: formData,
      cache: false,
      method: 'post',
      timeout: 30000,
      withCredentials: false
    })
    .then(res => {
      const e = res.data
      this.setState({
        uploadState: e.state,
        uploadCallbackData: e
      })
    })
    .catch((err) => {
      this.setState((preState) => {
        return {
          uploadState: 'error',
          uploadCallbackData: err
        }
      })
    })
  }
  render() {
    return (
      <ScrollView style = { styles.container }>
        <Text style = { styles.text }>UploadImg</Text>
        <Button
          title = "click me to show image picker"
          onPress = { this._showImgPicker }
          color = { config.theme.mainColor }
        />
        <Text style = { {textAlign: 'center'} }>(react-native-image-picker)</Text>
        <Text>
          { JSON.stringify( this.state.avatarSource ) }
        </Text>
        <Image
          source = { this.state.avatarSource }
          style = { styles.img }
        />
        <Button
          title = "click me to show image crop picker"
          onPress = { this._showImgCropPicker }
          color = { config.theme.mainColor }
        />
        <Text style = { {textAlign: 'center'} }>(react-native-image-crop-picker)</Text>
        <Button
          title = "clicke me to uploadImg"
          onPress = { this._uplpadImgToServer }
          color = { config.theme.mainColor }
        />
        <Text>
          upload state: { this.state.uploadState }
        </Text>
        <Text>
          upload data: { JSON.stringify(this.state.uploadCallbackData) }
        </Text>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
  },
  button: {
    color: config.theme.mainColor
  },
  text: {
    paddingTop: 10
  },
  img: {
    width: 300,
    height: 300,
    alignSelf:'center',
    backgroundColor: config.theme.mainColor
  }
})

export default {
  getScreen: () => {
    return UploadImg
  },
  path: 'UploadImg'
}