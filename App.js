import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { LoginBackground } from './common/LoginBackground';
import { Logo } from './common/Logo';
import { InputLogin } from './common/InputLogin';
import { ButtonSubmit } from './common/ButtonSubmit';
import AppStyleSheet from './common/AppStyleSheet';
import Dimensions from 'Dimensions';
class LoginScreen extends React.Component {
  static navigationOptions = { title: 'Welcome' , header: null};
  render() {
    return (
      <LoginBackground>
        <Logo />
        <View style={{flex:3}}>
            <InputLogin 
                leftIcon = {require('./assets/images/username.png')}
                textSize = {16}
                placeholder = 'username'
                secureTextEntry = {false}
                marginHorizontal = {20}
                onTextChange = { (text) => {
                  
                }}
                onTextSubmit = { (text) = {

                }}/>
              <InputLogin 
                leftIcon = {require('./assets/images/password.png')}
                textSize = {16}
                placeholder = 'password'
                marginTop = {10}
                secureTextEntry = {true}
                marginHorizontal = {20}
                onTextChange = { (text) => {
                  
                }}
                onTextSubmit = { (text) = {

                }}/>
           
             <ButtonSubmit />
              <View style={styles.container_btn_register}>
                <TouchableOpacity 
                   onPress = {() => {

                    }}>
                     <Text style={styles.text_register}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress = {() => {

                    }}>
                    <Text style={styles.text_register}>Fogot Password?</Text>
                </TouchableOpacity>
                  
              </View>
        </View>
      </LoginBackground>
    );
  }
}
const WIDTH_SCREEN = Dimensions.get('window').width;

const RootStack = createStackNavigator({
  Login: { screen: LoginScreen }
  });

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_button: {
    height: 40,
    width: WIDTH_SCREEN - 40,
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F035E0',
    borderRadius: 20,
    zIndex: 100,
  },
  text_button: {
    color: '#fff',
    fontSize: 18,
  },
  container_btn_register: {
    height: 40,
    width: WIDTH_SCREEN - 40,
    marginTop: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text_register: {
    color: '#fff',
    fontSize: 16,
  }
});