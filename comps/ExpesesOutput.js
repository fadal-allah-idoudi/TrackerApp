import { View,Text, StyleSheet } from "react-native";
import ExpansesSummary from "./ExpansesSummary";
import ExpensesList from "./ExpensesList";

function ExpesesOutput({expeses,expensesPeriod,fallbackText}){
  let content=<Text style={styles.infoText}>{fallbackText}</Text>
  if(expeses.length>0){
    content= <ExpensesList expeses={expeses}/>
  }
 return( 
  <View style={styles.container}>
    <ExpansesSummary expeses={expeses} PeriodName={expensesPeriod}/>    
   {content}
  </View>)
}
export default ExpesesOutput;
const styles = StyleSheet.create({
    container: {
      padding:24,
      backgroundColor:'#2d0689',
      flex:1
    },infoText:{
      color:'white',
      fontSize:16,
      textAlign:'center',
      margin:42
    }
  });
  