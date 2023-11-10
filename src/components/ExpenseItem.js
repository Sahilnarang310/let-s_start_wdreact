import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 20);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 289.67;
  return (
    <div>
      <div className="expense-item">{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle} </h2>
        <div className="expense-item__price">${expenseAmount}</div>
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
