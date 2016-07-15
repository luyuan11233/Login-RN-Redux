'use strict';
import React, {Component} from 'react';
import{
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Navigator,
  Image,
  AsyncStorage,
  BackAndroid,
} from 'react-native';

class Toolbar extends Component{

  render(){
      return(
            <View style={{flexDirection:'row',height:50,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderBottomWidth:1,borderBottomColor:'#e0e0e0'}}>
                <Text style={{color:'#333333',fontSize:16,marginTop:5}}>{this.props.title}</Text>
            </View>
        )}
}

module.exports = Toolbar;