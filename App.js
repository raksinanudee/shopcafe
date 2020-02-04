import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
 
  Alert
} from 'react-native';
import NumericInput from 'react-native-numeric-input'
import { create, PREDEF_RES } from 'react-native-pixel-perfect'

import { Button } from 'react-native-elements'

const calcSize = create(PREDEF_RES.iphone7.px)


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {text:''};
    console.log('fgfgf ')
    super(props)
    this.state = {
      value: 0,
      amount: 0,
      v1: 0,
      v2: 0,
      v3: 0,
      v4: 0,
      v5: 6,
      v6: 0,
      v7: 0,
      v8: 0,
      value1: 1
    }
    this.amount = 0
  }
  changeAmount(text) {
    this.amount = text
  }

    clickMe(){
      Alert.alert("Add");
  }
  
  render() {
    return (
      <ScrollView style={{ paddingBottom: 200 }} contentContainerStyle={styles.container}>
        <Text style={styles.welcome}>
         ADD
        </Text>
        <Text style={styles.instructions}>
          Add customer 
        </Text>
        <NumericInput
          initValue={this.state.v7}
          value={this.state.v7}
          onChange={(v7) => this.setState({ v7 })}
          totalWidth={300}
          rounded
          textColor='#103900'
          iconStyle={{ color: 'white' }}
          rightButtonBackgroundColor='#B60400'
          leftButtonBackgroundColor='#06BA63' />
          
        <View style={styles.seprator} />
        <View style={styles.buttonContainer}>
<Button 
onPress={this.clickMe}
  large
  icon={{name: 'plus', type: 'octicon', buttonStyle: styles.someButtonStyle  }}
  title='ADD' />
<Button 
onPress={this.clickMe}
  large
  icon={{name: 'x',  type: 'octicon', buttonStyle: styles.someButtonStyle  }}
  title='CANCEL' />
</View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: null,
    width: null,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 60,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
  seprator: {
    height: 10,
    width: 200,
    margin: 10,
  },
    buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  
}
});
