import { View,Text,StyleSheet, Button } from "react-native";

function ErrorOverlay({message,onConfirm}){
    console.log('====================================');
    console.log(message,onConfirm);
    console.log('====================================');
    return(
        <View style={styles.container}>
          <Text style={[styles.text,styles.title]}>An error occurred!</Text>
          <Text style={styles.text}>{message}</Text>
          <Button onPress={onConfirm} title="Okay"/>
        </View>
    )
}
export default ErrorOverlay;
const styles= StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
     alignItems:'center',
     padding:24,backgroundColor:'#2d0689'
    },
    text:{
        textAlign:'center',
        marginBottom:8,
        color:'white'
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
})