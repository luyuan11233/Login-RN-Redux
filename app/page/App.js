/**
 * Created by cong on 16/6/29.
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import {
    setUser,
    setPsw,
    setState
} from '../actions/loginAction';


import Toolbar from './../component/toolBar'
export default class App extends Component {
    render() {
        const {dispatch, loginR} = this.props;
        return (
            <View style={{flex: 1}}>
                <Toolbar 
                    title='登陆'/>
        <View style={{flexDirection:'row',height:45,marginTop:55,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:16,color:'#000000',marginLeft:20}}>账号</Text>

          <TextInput
              style={[styles.style_user_input,{marginLeft:9}]}
              placeholder='  请输入账号'
              numberOfLines={1}
              autoFocus={false}
              onChangeText ={(text)=>dispatch(setUser(text))}
              underlineColorAndroid={'transparent'}
              secureTextEntry={false}
              textAlign='left'/>
              </View>

              <View style={{height:1,backgroundColor:'#f4f4f4',marginLeft:20,marginRight:20}}/>

              <View style={{flexDirection:'row',height:45,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:16,color:'#000000',marginLeft:20}}>密码</Text>
              <TextInput
              style={styles.style_user_input}
              placeholder='  请输入密码'
              numberOfLines={1}
              autoFocus={false}
              underlineColorAndroid={'transparent'}
              secureTextEntry={true}
              onChangeText ={ (text)=>{
                if(text !=''){
                  dispatch(setState(true))
                }else{
                  dispatch(setState(false))
                }
                dispatch(setPsw(text))
              }
              }
              textAlign='left'/>
              </View>
              <View style={{height:1,backgroundColor:'#f4f4f4',marginLeft:20,marginRight:20}}/>
              <View style={[styles.style_view_commit,{backgroundColor:loginR.loginState?'#2B74C5':'#E5E5E5'}]} >
              <Text style={{color:loginR.loginState?'#fff':'#666666',fontSize:16}}>登录</Text>
              </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    style_user_input:{
        flex:1,
        fontSize:12
    },
    style_view_commit:{
      marginLeft:10,
      marginRight:10,
      marginTop:20,
      height:35,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center',
  },
})