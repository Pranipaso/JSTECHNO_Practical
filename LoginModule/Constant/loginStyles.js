import { Dimensions } from "react-native"

export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;
export const colors={
    red:'#FF0000',
    green:'DarkGreen',
    black:'#000000',
}
export const loginStyles={
    background:{
        height:height,
        width:width,
        justifyContent:'center',
       
    },
    label:{
        color:'white',fontSize:16,fontWeight:'bold',marginHorizontal:'5%'
    },
    textInputView:{
        backgroundColor:'white',
        padding:'2%',
        margin:'3%',borderRadius:100
    },
    
    loginButton:{height:height/15,
        width:width/2,
        justifyContent:'center',margin:'3%',alignSelf:'center',alignItems:'center'},
    errorText:{fontSize:16,fontWeight:'bold',marginHorizontal:'5%'},
}