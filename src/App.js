
import React from "react";
import Expenses from "./Components/Expenses/Expenses.js";
import NewExpenses from "./Components/NewExpenses/NewExpenses.js";

const App = () => {

    let expenses = [
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

        {
            id: "en5",
            title: "Travel",
            amount: 560,
            date: new Date(2022, 4, 10)

        }
    ];

    const dataFromChildToChild = (setDate) =>{
        const data ={
            ...setDate,
            name:"simpy"
        }
        console.log(data);
    }

    return (
        <div>
            < NewExpenses onChangeChildData = {dataFromChildToChild} />
            <Expenses item={expenses} />
        </div>
    );
}
export default App;