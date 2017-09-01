import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  FlatList
} from 'react-native'

export default class TestPop extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: `testPop With name: ${navigation.state.params.user}`
  // });
  static navigationOptions = {
    title: 'TestPop title',
    headerRight: <Text title="testRight" >testRight</Text>,
    tabBarVisible: false
  }
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    console.log('testpop1 componentDidMount')
    this.setState(() => {
      return {
        list: [{
          key: 1
        }, {
          key: 2
        }, {
          key: 3
        }, {
          key: 4
        }, {
          key: 5
        }, {
          key: 6
        }]
      }
    })
  }
  render() {
    return(
      <View>
        <FlatList
          data = { this.state.list }
          renderItem = { ({item}) => <Text style={ styles.item }>test list : key => { item.key } </Text> }
          style = { styles.list }
        >
        </FlatList>
        <ScrollView>
          <Text title="testRight" >testRight</Text>
          <Text title="testRight" >testRight</Text>
          <Text title="testRight" >testRight</Text>
          <Text title="testRight" >testRight</Text>
          <Text title="testRight" >testRight</Text>
          <Text title="testRight" >testRight</Text>
          <Text title="testRight" >testRight</Text>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    backgroundColor: '#f00'
  },
  item: {
    textAlign: 'center',
    backgroundColor: '#0f0',
    paddingTop: 10,
    marginTop: 5
  }
})