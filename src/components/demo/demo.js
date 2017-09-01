import React, { Component, PureComponent } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Button,
  SectionList
} from 'react-native'
import * as config from '../../config/config.js'
import list from './demo.list.js'
class Demo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Demo'
  });
  constructor(props) {
    super(props)
    this.state = {
      sections: []
    }
  }
  componentDidMount() {
    const sections = []
    for (let i = 0; i < list.length; i++) {
      for (let section in list[i]) {
        sections.push({
          key: section,
          data: list[i][section].map((val, key) => {
            return {
              title: val.title,
              view: val.view,
              key
            }
          })
        })
      }
    }
    this.setState((preSates) => {
      return {
        sections: sections
      }
    })
  }
  _renderItem = ({item}) => {
    // 前往对应demo页面
    const goMapDemo = (myitem) => {
      const navigate = this.props.navigation.navigate
      myitem.view && navigate(myitem.view)
    }
    return (
      <Text
        onPress={() => { goMapDemo(item) } }
        style={ styles.item }
      >
        { item.title }
      </Text>
    )
  }
  render() {
    console.log('this.state.sections')
    console.log(this.state.sections)
    return(
      <View style={ styles.container }>
        <SectionList
          // style = { styles.sectionList }
          sections = { this.state.sections }
          renderItem = { this._renderItem }
          renderSectionHeader = { ({section}) => <Text style={ styles.header }>{ section.key }</Text> }
          ItemSeparatorComponent = { () => <View style={ styles.line }></View> }
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  container: {
    // justifyContent: 'center'
    flex: 1
  },
  sectionList: {
    flex: 1
  },
  item: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: config.theme.mainColor
  },
  line: {
    height: 1,
    backgroundColor: '#fff'
  }
})

export default Demo


