import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { loginStyles, width,colors } from './Constant/loginStyles'
import { emptyEmail, enterEmail, enterPassword, login, passwordEmpty } from './Constant/string'

const Login = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [PasswordError, setPasswordError] = useState(passwordEmpty)
    const [isEmailCorrect,setIsEmailCorrect] = useState(Email.length != 0?true:false)
    const [isPasswordCorrect,setIsPasswordCorrect] = useState(Password.length > 8?true:false)
    const [ShowPassword, setShowPassword] = useState(false)
    const [isLoginDisabled,setisLoginDisabled] =useState(false);

    useEffect(() => {
        Email.length != 0?setIsEmailCorrect(true):setIsEmailCorrect(false);
        Password.length>8 ?setIsPasswordCorrect(true):setIsPasswordCorrect(false);
    
    }, [Email.length,Password.length])
    

    const checkPassword = (text) =>{
        if(text.length == 0 || text.length < 8){
            setPasswordError(passwordEmpty)
            setIsPasswordCorrect(false)
            return false
        }
        else{
            setIsPasswordCorrect(true)
            return true;
        }
    }

    return (
        <ImageBackground style={[loginStyles.background]} source={require('../LoginModule/Assets/background.png')}>
            <View style={{flex:1,backgroundColor:'#FFFFFF50', justifyContent:'center',}}>

                <Text style={loginStyles.label}>{enterEmail}</Text>
                <View style={loginStyles.textInputView}>
                <TextInput style={loginStyles.textInput} value={Email} onChange={(text)=>{
                    if(text.length == 0){
                        setIsEmailCorrect(false)
                        return false
                    }else{
                        setIsEmailCorrect(true)
                        return true
                    }
                }} onChangeText={(text)=>{
                    setEmail(text)
                }}
                placeholder={enterEmail}/>
            </View>
                <Text style={[loginStyles.errorText,{color:isEmailCorrect?'green':'red'}]}>{emptyEmail}</Text>

                <Text style={loginStyles.label}>{enterPassword}</Text>
            <View style={loginStyles.textInputView}>
                <View style={{flexDirection:'row',marginHorizontal:'1%',alignItems:'center',justifyContent:'space-between'}}>

                <TextInput style={loginStyles.textInput} placeholder={enterPassword} secureTextEntry={ShowPassword} value={Password} onChange={(text)=>{
                    checkPassword(text)
                }} onChangeText={(text)=>{
                    setPassword(text)
                }}/>
                <Text onPress={()=>{
                        setShowPassword(!ShowPassword)
                    }}>Show Password</Text>          
                </View>
            </View>
                <Text style={[loginStyles.errorText,{color:isPasswordCorrect?'green':'red'}]}>{PasswordError}</Text>
            <TouchableOpacity disabled={isPasswordCorrect==false || isEmailCorrect ==false} style={[loginStyles.loginButton,{backgroundColor:isPasswordCorrect==false || isEmailCorrect ==false?'lightgrey':'white',}]} onPress={()=>{
                Alert.alert('Login Successful',`Welcome ${Email}`)
            }}>
                <Text>{login}</Text>
            </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

export default Login