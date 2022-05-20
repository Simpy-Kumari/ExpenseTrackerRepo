import React from "react";
import "./Cart.css";

const Cart = (props) => {

    const classes = "cart " +  props.className;       //cart expense-item
return <div className = {classes}>{props.children }</div>

}
export default Cart;