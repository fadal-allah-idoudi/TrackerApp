import { StyleSheet, Text, View } from 'react-native';
import ExpesesOutput from '../comps/ExpesesOutput';
import { useContext} from "react";
import { ExpanseContext } from '../store/Expense-context';
function AllExpances(){
    const expensescontext = useContext(ExpanseContext);
    return <ExpesesOutput expeses={expensescontext.expense} expensesPeriod="total" fallbackText={"No expences Found"}/>
}
export default AllExpances;