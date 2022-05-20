import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpenses = (props) => {

    const saveExpenseDataHander = (getDataFromChild) => {
        const expenseData ={
            ...getDataFromChild,
            id: Math.random().toString()
        }
        props.onChangeChildData(expenseData);
         console.log(expenseData);
    };

    return (
        <div className = 'new-expense'>
    
            <ExpenseForm  sentExpenseData = {saveExpenseDataHander} />
        </div>
    );
}

export default NewExpenses;