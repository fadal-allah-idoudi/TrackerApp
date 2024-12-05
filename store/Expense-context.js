import { createContext ,useState,useReducer} from "react";
// const DUMMY8EXPENSES=[
//     {
//         id:'e1',
//         description:'A pair of shoes',
//         amount:59.99,
//         date:new Date(2024, 11, 26)
//     },
//     {
//         id:'e2',
//         description:'A pair of Shirts',
//         amount:100.99,
//         date:new Date(2024, 11, 3)
//     },
//     {
//         id:'e3',
//         description:'Banans',
//         amount:100.99,
//         date:new Date(2024, 11, 1)
//     },
//     {
//         id:'e4',
//         description:'Book',
//         amount:100.99,
//         date:new Date(2023, 11, 2)
//     } , {
//         id:'e5',
//         description:'A pair of shoes',
//         amount:59.99,
//         date:new Date(2023, 11, 10)
//     },
//     {
//         id:'e6',
//         description:'A pair of Shirts',
//         amount:100.99,
//         date:new Date(2023, 11, 17)
//     },
//     {
//         id:'e7',
//         description:'Banans',
//         amount:100.99,
//         date:new Date(2023, 11, 18)
//     },
//     {
//         id:'e8',
//         description:'Book',
//         amount:100.99,
//         date:new Date(2023, 11, 18)
//     }
// ]
export const ExpanseContext= createContext({
        expencesArray:[],
        addExpens:({descriiption,amount,date})=>{},
        DeletExpens:(id)=>{},
        setExpanses:(expensse)=>{},
        UpdateExpens:(id,{descriiption,amount,date})=>{},
        ids:0
});
function Reducer(state,action){
    switch(action.type){
        case 'ADD':
            const obj={...action.payload,Fid:action.ids}
            console.log("ffff",obj)
            return [obj,...state]
            
        case 'UPDATE':
            const updateExpensseIndex=state.findIndex(
                (expense)=>expense.id ===action.payload.id);
            const updatabaleExpense =state[updateExpensseIndex];
            
            const updatedItem={...updatabaleExpense,...action.payload.data};
            const updatedeExpense =[...state];    
            updatedeExpense[updateExpensseIndex]=updatedItem;
            return updatedeExpense
        case 'DELETE':
           
            return state.filter((expense)=>expense.id!=action.payload)
        case 'SET':
             const Inverte =action.payload.reverse();
        return Inverte
        default:
            return state;   
    }
}
function ExpensesContextProvider({children}){
    const [ids, setIds] = useState(0); 
    const [expensState,dispatch]=useReducer(Reducer,[]);
    function AddExpenses(expensData){
        setIds(ids+1)
        
        
        dispatch({type:'ADD',payload:expensData,ids:ids});
    }
    function DeleteExpenses(id){
        dispatch({type:'DELETE',payload:id});
    }
    function UPDATEExpenses(id,expensData){
        dispatch({type:'UPDATE',payload:{id:id,data:expensData}});
    }
    function setExpanses(expanse){
        dispatch({type:'SET',payload:expanse})
    }
    const value={
        expense:expensState,
        AddExpenses:AddExpenses,
        DeleteExpenses:DeleteExpenses,
        UPDATEExpenses:UPDATEExpenses,
        setExpanses:setExpanses

    }
    return <ExpanseContext.Provider value={value}>{children}</ExpanseContext.Provider>
}
export default ExpensesContextProvider;