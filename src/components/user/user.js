import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  FlatList
} from 'react-native'

export default class User extends Component {
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
      <View style={ styles.container }>
        <FlatList
          data = { this.state.list }
          renderItem = { ({item}) => <Text style={ styles.item }>test list : key => { item.key } </Text> }
          style = { styles.list }
        >
        </FlatList>
        <ScrollView>
          <Button title="ScrollView Button" />
          <Button title="ScrollView Button" />
          <Button title="ScrollView Button" />
          <Button title="ScrollView Button" />
          <Button title="ScrollView Button" />
          <Button title="ScrollView Button" />
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