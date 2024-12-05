import { Children } from 'react';

import { StyleSheet, Text, View,Pressable, Button } from 'react-native';
function PrimaryButton({children,cliked,style}){
    
return(
    <View style={styles.Container}>
        <Pressable style={({pressed})=>pressed 
        ?[styles.pressed,style]
        : [style]}
        onPress={cliked} 
        android_ripple={{color:'#5e6e7b',}}>   
            {children}
        </Pressable>
    </View>
)
}
export default PrimaryButton;
const styles=StyleSheet.create({
    Container:{
        borderRadius:40,
        overflow:'hidden',
    },
   
    pressed:{
        opacity:0.75,
        
    }
})