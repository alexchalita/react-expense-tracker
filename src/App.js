import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
  {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),}, 
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // alternate to JSX in pure React and JS
  // .createElement -> at index 0, if native HTML, just use the tag, if custom React component, use custom name
  //                -> at index 1, any properties that should be set, if none, pass in empty object
  //                -> at index 2+, any element/children that would go in the newly created Element
  //return React.createElement(
  //  'div',
  //  {},
  //  React.createElement('h2', {}, 'Let\'s get started!'),
  //  React.createElement(Expenses, {data:expenses})
  //);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
