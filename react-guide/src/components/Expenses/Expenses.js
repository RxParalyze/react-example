import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
    let content = [];

    const [filteredYear, setFilteredYear] = useState('2020');

    const saveFilterDataHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    content.push(
        <ExpensesFilter selected={filteredYear} onSaveFilterData={saveFilterDataHandler} />
    );

    for(let x in props.expenses) {
        content.push(ExpenseItem(props.expenses[x]));
    }
    return content;
}

export default Expenses;