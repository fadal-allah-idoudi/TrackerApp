import { Text, View, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button2 from "./Button2";

function ExpanseForm(props) {
    const [date2,setdate]=useState()
    const date= new Date()
    
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const yearMonth=date.toISOString().slice(0,10)
    const fixedday = props.selectedExpense && String(props.selectedExpense.date.getDate()).padStart(2, '0') ;
    const fixedtoday= `${year}-${month}-${fixedday}`;
  

    const [InputValue, setInputValue] = useState({
        amount: {
            value: props.selectedExpense ? props.selectedExpense.amount.toString() : '',
            isValid: true
        },
        date: {
            value: props.selectedExpense && props.selectedExpense.date ? fixedtoday : yearMonth,
            isValid: true
        },
        description: {
            value: props.selectedExpense ? props.selectedExpense.description : '',
            isValid: true
        },
        
    });

    function InputHundler(inputidentefier,text){
        setInputValue((currentInput)=>{
            return{
                ...currentInput,
                [inputidentefier]:{value:text,isValid:true}
            }
        })
    }
    
    function SubmitHandler(){
        const date2= new Date()
        const expensedata={
            amount:+InputValue.amount.value,
            date:InputValue.date.value.toString() !== "Invalid Date"? new Date(InputValue.date.value): date2,
            description:InputValue.description.value,
        };
        const amountValid= !isNaN(expensedata.amount)&& expensedata.amount >0;
        const descriptionValid=expensedata.description.trim().length>0;
        const dateValid=expensedata.date.toString() !== "Invalid Date";
        
        if( !amountValid || !dateValid || !descriptionValid)
        {
            // Alert.alert('Invalid Input','Please check your input')
            setInputValue((cur) => {
                return {
                    amount: { value: cur.amount.value, isValid: amountValid },
                    date: { value: cur.date.value, isValid: dateValid },
                    description: { value: cur.description.value, isValid: descriptionValid },
                };
            });
            console.log('wrong')
            return;
        }
        props.ClickHundler(expensedata)
    }
     
    const formIsInvalid = !InputValue.amount.isValid || !InputValue.description.isValid || !InputValue.date.isValid;

    return (
        <View style={{marginTop:40}}>
            <Text style={{fontSize:24,fontWeight:'bold',color:'white',marginVertical:14,textAlign:'center'}}>Your Expense</Text>
            <View style={styles.input}>
                <Input label="Amount"
                invalid={!InputValue.amount.isValid}
                style={styles.row} textprops={{
                    keyboardType:'decimal-pad',
                    onChangeText:InputHundler.bind(this,'amount'),
                    value:InputValue.amount.value,
                    
                }}/>
                <Input style={styles.row} label="Date"
                invalid={!InputValue.date.isValid}
                 textprops={{
                    keyboardType:'decimal-pad',
                    onChangeText:InputHundler.bind(this,'date'),
                    placeholder:'YYYY-MM-DD',
                    maxLength:10,
                    value:InputValue.date.value
                }}/>
            </View>
            <Input label="Description"
            invalid={!InputValue.description.isValid}
            textprops={{
                multiline:true,
                onChangeText:InputHundler.bind(this,'description'),
                value:InputValue.description.value
            }}/>
            {formIsInvalid && <Text style={styles.errortext}>Check you Input Please.You wrote an incorrect DATA </Text>}
             <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                <Button2 style={styles.button} mode={"flat"} clicked={props.cancelHundler}>
                    cancel
                </Button2>
                <Button2 style={styles.button}  clicked={SubmitHandler}>
                    {props.isEditing? 'Update':"Add"}
                </Button2>
                
            </View>
        </View>
    );
}

export default ExpanseForm;

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#200364',
        padding: 24
    },
    deletecontainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: 'white',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    errortext:{
        textAlign:'center',
        color:'red',
        margin:8
    }
});