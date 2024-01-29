import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

function ExpenseItem(props) {

  // let title = props.title;
  const clickHandler =()=>{
    console.log("Gaand ft gya")
  };
// const locationOfExpenditure = 'Mumbai
  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
    <div className='expense-item__description'>
      {/* <h2>{title}</h2> */}
    <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
    </div>
    <div className='expense-item__price'><button onClick={clickHandler}>Delete Expense</button></div>
    
    
    </Card>
   
  
  )



  
}

export default ExpenseItem
