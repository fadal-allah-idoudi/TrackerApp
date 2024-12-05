import { useLayoutEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../comps/Button';
import { Ionicons } from '@expo/vector-icons';
import Button2 from '../comps/Button2';
import {useContext,useState,useEffect} from 'react';
import { ExpanseContext } from '../store/Expense-context';
import ExpanseForm from '../comps/ExpanseForm';
import LoadingOverlay from '../comps/LoadingOverlay';
import { Delete, fecthExpenses, storExpense,total, update } from '../comps/http';
import ErrorOverlay from '../comps/ErrorOverlay';

function ManageExpances({route,navigation}){
    const [isSubmiting, setisSubmiting] = useState(false)
    const expensescontext = useContext(ExpanseContext);
    const editedExpanseId=route.params?.expensId;
    const isEditing= !!editedExpanseId;
    const [error, seterror] = useState('');
    useLayoutEffect(()=>{
    navigation.setOptions({
        title: isEditing ? 'Edit Expanse':'Add Expennse'
    });
}, [isEditing,navigation])


const selectedExpense =expensescontext.expense.find(expense =>expense.id === editedExpanseId)
async function ClickHundler(expensedata){
    
   try {if (isEditing){
            expensescontext.UPDATEExpenses(editedExpanseId,expensedata); 
            await update(editedExpanseId,expensedata);
            seterror('cant update');
    }else{
        const id= await storExpense(expensedata);
        expensescontext.AddExpenses({...expensedata,id:id});
        seterror('cant add');
    }
    navigation.goBack();
   }catch(erro){
    seterror('could not save data');
   }
}
function cancelHundler(){
    navigation.goBack();
}
function errorHndler(){
    seterror(null)
   
}
if(error)
    {
        return <ErrorOverlay message={error} onConfirm={errorHndler}/>
    }
async function DeleteHundler(){
    try
   { 
    console.log('====================================');
    console.log("delete");
    console.log('====================================');
    expensescontext.DeleteExpenses(editedExpanseId);
    await Delete(editedExpanseId);
    navigation.goBack();

   
}
    catch{ 
        setisSubmiting(true);
        seterror('Could not delete try again later')
       
     }
}
if(isSubmiting){
    return <LoadingOverlay/>
}
    return (
        <View style={styles.container}>
            <ExpanseForm selectedExpense={selectedExpense} ClickHundler={ClickHundler} isEditing={isEditing} cancelHundler={cancelHundler}/>
           
            {isEditing && (
                <View style={styles.deletecontainer}>
                    <PrimaryButton cliked={DeleteHundler}>
                    <View >
                      <Ionicons  name="trash" size={30} color='red'  />
                    </View>
                    </PrimaryButton>
                </View>
            )}
        </View>
        
        
    )
}
export default ManageExpances;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#200364',
      
      padding:24
    },
    deletecontainer: {
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:'white',
        alignItems:'center'
    },
    button:{
        minWidth:120,
        marginHorizontal:8
    }
  });
  