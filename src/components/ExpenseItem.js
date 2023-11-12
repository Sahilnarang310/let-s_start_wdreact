import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// import './ExpenseDetails';
import ExpenseDetils from "./ExpenseDetails";
function ExpenseItem(props) {
  
  return (
    <div>
    <div className='expense-item'>
     <ExpenseDate date = {props.date}/>

     <div className="expense-item__description">
    {/* <ExpenseDetils amount={props.amount}/>  */}
    <ExpenseDetils   title={props.title} amount={props.amount}  location={props.locationOfExpenditure} />
    </div>
    </div>
     </div>
  );
}

export default ExpenseItem;
