import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    // console.log('Expenses.js', selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={ filteredYear }
          onChangeFilter={ filterChangeHandler }
        />
        <ExpenseItem 
          title={ items[0].title }
          amount={ items[0].amount }
          date={ items[0].date } 
        />
        <ExpenseItem 
          title={ items[1].title }
          amount={ items[1].amount }
          date={ items[1].date } 
        />
        <ExpenseItem 
          title={ items[2].title }
          amount={ items[2].amount }
          date={ items[2].date } 
        />
      </Card>
    </div>
  );
};

export default Expenses;