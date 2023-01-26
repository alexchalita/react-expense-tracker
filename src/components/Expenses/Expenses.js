import React, { useState } from "react";

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
                {/**
                  *{filteredExpenses.length === 0 ? ( <p>No expenses found</p> ) : (
                  *filteredExpenses.map((expense) => (
                  *    <ExpenseItem
                  *        key={expense.id}
                  *        title={expense.title}
                  *        amount={expense.amount}
                  *        date={expense.date}
                  *    />
                  *    ))
                  *)}

                  * alternatively, you could write the above ternary expression using the AND (&&) logic
                  * in JS, the second part of an && statement only gets checked if the first conidition
                  * is met, it would something like:
                  * {filteredExpenses === 0 && <p>no expenses found</p>}
                  * {filteredExpenses > 0 && filteredExpenses.map()}
                  */
                }

            </Card>
        </div>
    );
}

export default Expenses;