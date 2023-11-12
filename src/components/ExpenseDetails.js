// import React from 'react';
import "./ExpenseItem.css";
function ExpenseDetils(props){
    return (
    <div>   
    <div className="expense-item__description">    
      <h2>{props.title} </h2>
      <div className="expense-item__price">${props.amount}
      <div>{props.location}</div></div>
    </div>
  </div>

     
    )
}
export default ExpenseDetils;