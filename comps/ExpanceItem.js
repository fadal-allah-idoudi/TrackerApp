import { Pressable, View,Text,StyleSheet } from "react-native";
import { getFormatDate } from "./date";
import { useNavigation } from "@react-navigation/native";


function ExpanceItem({description,amount,date,id}) {
    const navigation= useNavigation()
    function expansehundler(){
        navigation.navigate("ManageExpances",{
            expensId:id
        })
}
    return(
        <View style={{marginVertical:10,borderRadius:10,overflow:'hidden',}}>
            <Pressable  android_ripple={{color:'grey'}} style={({pressed})=>pressed && [styles.presed]} onPress={expansehundler}>
                <View style={styles.expenseItem}>
                    <View >
                        <Text style={[styles.textBase,styles.description]}>{description}</Text>
                        <Text style={styles.textBase}>{getFormatDate(date)}</Text>
                       
                    </View>   
                    <View>
                        <View style={styles.amontCanitainer}>
                            <Text style={styles.amount}>{amount}</Text>
                            {/* <Text style={styles.amount}>{id}</Text> */}
                        </View>
                    </View>
                </View>  
            </Pressable>
        </View>
       
    )
}
export default ExpanceItem;
const styles = StyleSheet.create({
    expenseItem:{
        padding:16,
        backgroundColor:'#3e04c3',
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:4,
        shadowColor:'#3e04c3',
        shadowOffset:{width:1,height:1},
        shadowRadius:6,
        shadowOpacity:0.4,
    },
    textBase:{
        color:'#e4d9fd',
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold'
    },
    amontCanitainer:{
        paddingHorizontal:12,
        paddingVertical:14,
        backgroundColor:'white',
        alignItems:'center',
        borderRadius:4,
        minWidth:80
    },
    amount:{    
        color:'#3e04c3',
        fontWeight:'bold',
    },presed:{
        opacity:0.75
    },
    ovzer:{
        
    }
  });
  