
import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses.js";
import NewExpenses from "./Components/NewExpenses/NewExpenses.js";

let Expense_data = [
    {
        id: "en1",
        title: "School Fee",
        amount: 600,
        date: new Date(2022, 4, 12)

    },

    {
        id: "en2",
        title: "House Rent",
        amount: 7000,
        date: new Date(2022, 4, 5)

    },

    {
        id: "en3",
        title: "Books",
        amount: 540,
        date: new Date(2022, 3, 22)

    },

    {
        id: "en4",
        title: "Kitchen Items",
        amount: 950,
        date: new Date(2022, 4, 8)

    },

];


const App = () => {

    const [expenses, setExpenses] =useState(Expense_data)

   
    const dataFromChildToChild = (data) =>{
       const updatedExenses = [data, ...expenses]
       setExpenses (updatedExenses);
    }

    return (
        <div>
            < NewExpenses onChangeChildData = {dataFromChildToChild} />
            <Expenses item={expenses} />
        </div>
    );
}
export default App;