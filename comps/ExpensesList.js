import { View,Text, FlatList } from "react-native";
import ExpanceItem from "./ExpanceItem";
function render(item){
        return <ExpanceItem {...item.item}/>;
    }  
function ExpensesList({expeses}){
    
 return( 
    <View>
      <FlatList data={expeses} 
      renderItem={render} 
      keyExtractor={(item)=> item.id }
      />
    </View>
  )
}
export default ExpensesList;