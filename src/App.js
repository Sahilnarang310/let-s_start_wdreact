import logo from './logo.svg';

import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           {/* <h2> Lets get Started </h2>  */}
// //        <p> This is also visible </p>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import ExpenseItem  from './components/ExpenseItem';
function App (){

return (

<div>
<h2>Let's get started !</h2>
<ExpenseItem></ExpenseItem>
</div>
  );
}
export default App;