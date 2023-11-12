import "./ExpenseItem.css";
function ExpenseItem(props) {
 
  return (
    <div>
      <div className="expense-item">{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price">${props.amount}</div>
        <div className="expense-item__locationOfExpenditure">{props.locationOfExpenditure}</div>
      </div>
    </div>
  );
}

// import React from "react";

// function ExpenseItem() {
//   return (
//     <div>
//       <h2>Expense Items</h2>
//       <div>
//         <div>Food Rs 10</div>
//         <div>Petrol Rs 100</div>
//         <div>Movies Rs 200</div>
//       </div>
//     </div>
//   );
// }

export default ExpenseItem;
