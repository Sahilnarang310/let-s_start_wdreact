import logo from "./logo.svg";

import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Mumbai",
    },
    { id: "e2", 
    title: "Meeting With Kangna Ranaut",
     amount: 79999.49, 
     date: new Date(2021, 2, 12),
    location:"Andheri", },
    {
      id: "e3",
      title: "MahaRaja + French Fries",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Cnaught Place Delhi",
    },
    {
      id: "e4",
      title: "Extra Large Bucket",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "KFC",
    },
  ];
  return (
    <div>
      <h2>Let's get started !</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        locationOfExpenditure={expense[0].location}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
        locationOfExpenditure={expense[1].location}
        />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
        locationOfExpenditure={expense[2].location}
        />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
        locationOfExpenditure={expense[3].location}
        />
    </div>
    );
  
}
export default App;
