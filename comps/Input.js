import { Text,  View,StyleSheet } from "react-native";
import  {TextInput} from 'react-native'
function Input({label,textprops,style,invalid}){
    let inputStyles=[styles.input];
    const test =invalid === false
    if (textprops && textprops.multiline){
        inputStyles.push(styles.multiline)
    }
    if(invalid){
        inputStyles.push(styles.invalidinput)
    }
    return(
        <View style={[styles.container,style ]}>
          <Text style={[styles.label,invalid && styles.invalidlabe]}>{label}</Text>
          <TextInput style={inputStyles} {...textprops} />
        </View>
    )
}
export default Input;
const styles = StyleSheet.create({
    container: {
      marginHorizontal:4,
      marginVertical:16,
      
    },
    label: {
        fontSize:12,
        color:'#c6affc',
        marginBottom:4,

    },
    input:{
        backgroundColor:'#c6affc',
        padding:6,
        borderRadius:6,
        fontSize:18
    },
    multiline:{
        minHeight:100,
        textAlignVertical:'top'
    },invalidlabe:{
color:'red'
    },invalidinput:{
        backgroundColor:'#fcc4e4'
    }
  });