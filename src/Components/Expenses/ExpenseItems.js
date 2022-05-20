import React, {useState} from "react";
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate.js';
import Cart from "../UI/Cart";

const ExpenseItems = (props) => {

       

        return(
            <Cart className="expense-item">

                <ExpenseDate date = {props.date}/>

                <div className="expense-item_description">
                    <h3>{ props.title }</h3>

                    <div className="expense-item_price">$ {props.amount}</div>
                </div>
            </Cart>
        );
    
}
export default ExpenseItems;