import ExpenseItem from "./components/Expenses/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "To-Let Board",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location : 'Bangaluru',

    },
    { id: "e2",
     title: "Meeting with Kangna Ranaut",
      amount: 79999.49, 
      date: new Date(2021, 2, 12), 
      location : 'Andheri',
  },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location : 'Delhi',

    },
    {
      id: "e4",
      title: "KFC",
      amount: 450,
      date: new Date(2021, 5, 12),
      location : 'Cnaught Place Delhi',
    },
    {
      id: "e5",
      title: "Old Monk",
      amount: 7590,
      date: new Date(2021, 8, 12),
      location : 'Indore',
    },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => (
      <ExpenseItem
      title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
      />
      ))}
    </div>
  );
}

export default App;
