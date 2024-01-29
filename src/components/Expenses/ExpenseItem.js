import React, { useState } from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount);
  // let title = props.title;
  const clickHandler =()=>{
    console.log("Gaand ft gya");
    setTitle("Updated!");
    console.log(title);
  };
  const changePrice = () => {
    setPrice(100);
    console.log(price);
  };
// const locationOfExpenditure = 'Mumbai
  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
    <div className='expense-item__description'>
      {/* <h2>{title}</h2> */}
    <ExpenseDetails amount={price}  location={props.location}   title={title} />
    </div>
    <div className='expense-item__price'><button onClick={clickHandler}>Change Title</button></div>
    
    <button onClick={changePrice}>Change Price</button>
    </Card>
   
  
  )



  
}

export default ExpenseItem
