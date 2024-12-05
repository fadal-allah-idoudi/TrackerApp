import { StyleSheet, Text, View } from 'react-native';
import ExpesesOutput from '../comps/ExpesesOutput';
import { getDateMinusDays } from '../comps/date';
import { useContext, useEffect, useState} from "react";
import { ExpanseContext } from '../store/Expense-context';
import  {fecthExpenses}  from '../comps/http';
import LoadingOverlay from '../comps/LoadingOverlay';
import ErrorOverlay from '../comps/ErrorOverlay';

function RecentExpances(){
    const [isFecthing, setisFecthing] = useState(true);
    const [error, seterror] = useState('');
    
    const expensescontext = useContext(ExpanseContext);
    useEffect(()=>{
        async function getExpenses(){
            setisFecthing(true);
            try{
            const expenses= await fecthExpenses();
            expensescontext.setExpanses(expenses);
        }catch(error)
            {
                console.log(error);
                
                seterror('could not fetch data')
            }
             setisFecthing(false);
    }
    getExpenses();
    },[]);
    function errorHundler(){
        seterror(null)
    }
    if(!isFecthing && error){
        return <ErrorOverlay message={error} onConfirm={errorHundler}/>
    }
    if(isFecthing){
        return <LoadingOverlay/>
    }
    const recentExpense=expensescontext.expense.filter((expenses)=>
    {
        const today= new Date();
        const date7daysago=getDateMinusDays(today,7);
        return expenses.date>date7daysago
    })
    return <ExpesesOutput expeses={recentExpense} expensesPeriod="Last 7days" fallbackText={"No expences for the last 7 Days"}/>
}
export default RecentExpances;