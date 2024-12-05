import axios from 'axios';
import { useState } from 'react';
const BACK_URL ='https://tracker-app-9f0ba-default-rtdb.firebaseio.com/'

export async function storExpense(expenseData){
    const response=await axios.post(BACK_URL+'/test.json', expenseData);
    const id=response.data.name;
    return id;
}
export async function fecthExpenses(){
    console.log("fecthExpenses");
    
    const response= await axios.get(BACK_URL+'/test.json');
    const expenses=[];
    for(const key in response.data){
        const expenseObj={
            id:key,
            amount:response.data[key].amount,
            date:new Date(response.data[key].date),
            description:response.data[key].description,
        };
        expenses.push(expenseObj);
    }
    return expenses
}
export  function update(id,expenseUpdate){
   return axios.put(BACK_URL+`/test/${id}.json`,expenseUpdate)
}export  function Delete(id){
   return axios.delete(BACK_URL+`/test/${id}.json`)
}