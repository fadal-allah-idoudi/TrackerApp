import { View,Text, StyleSheet } from "react-native";

function ExpansesSummary({PeriodName,expeses}){
    const expensessummary =expeses.reduce((Sum,expese)=>{
        return Sum+expese.amount
    },0)
 return( 
    <View style={styles.container}>
      <Text style={styles.perid}>{PeriodName}</Text>  
      <Text style={styles.sum}>DT {expensessummary.toFixed(2)}</Text>  
    </View>
  )
}
export default ExpansesSummary;
const styles = StyleSheet.create({
    container: {
      padding:8,
      backgroundColor:'#e4d9fd',
      borderRadius:6,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    perid:{
        fontSize:12,
        color:'#5721d4',

    },
    sum:{
        fontSize:16,fontWeight:'bold',color:'#3e04c3'
    }
  });
  