import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    let content = [];
    for(let x in props.expenses) {
        content.push(ExpenseItem(props.expenses[x]));
    }
    return content;
}

export default Expenses;