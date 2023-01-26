import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

import './ExpenseItem.css'

// useState TL:DR:
//      register state with useState, you always get back two items, the value itself and the updating function
//      you call the updating function whenever the state should change and you use the first of the two elements
//      whenever you want to use the state value to output it to the JSX code. React will re-execute the component
//      function and re-evaluate the JSX code whenever the state changes


// Uncontrolled/Stateless (Dumby) Component (vs Controlled/Stateful Component)
const ExpenseItem = (props) =>{

    return(
        //must have only ONE root element, and then as many children as you want
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;