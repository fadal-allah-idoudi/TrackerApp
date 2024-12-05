import { Pressable, StyleSheet, Text, View } from 'react-native';
function Button2({clicked,children,mode,style,onPressOut}){
    return(
        <View style={[styles.container,style,]}>
            <Pressable
            onPressOut={onPressOut}
             onPress={clicked} 
             android_ripple={{color:'#bcb4ce'}}
             style={({pressed})=>pressed 
            ?[styles.pressed,style]
            : [style]}
            >
                <View style={[styles.button,mode==='flat' &&styles.flat]}>
                    <Text style={[styles.buttonText, mode ==='flat' && [styles.flattext,styles.buttonText2]]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default Button2;
const styles = StyleSheet.create({
    button:{
        borderRadius:4,
        padding:8,
        backgroundColor:'#3e04c3',
    },
    flat:{
        backgroundColor:'transparent'
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    flattext:{color:'#a281f0'},
    pressed:{opacity:0.75,
        backgroundColor:'#5f26e6',
        borderRadius:4
    },container:{
        overflow:'hidden',
        borderRadius:4
    },buttonText2:{color:'red'}

  });
  