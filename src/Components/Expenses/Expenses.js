import React from "react";
import './Expenses.css';
import ExpenseItems from './ExpenseItems';
import Cart from "../UI/Cart";

const Expenses = (props) => {

    return (


        <Cart className='expenses '>
            {
                props.item.map((expense) => 
                    (<ExpenseItems
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount} />)
                
                )
            }

        </Cart>
    );
}
export default Expenses;