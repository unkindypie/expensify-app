import React from 'react'
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

console.log('test');

const ExpenseDashboardPage = ()=>(
    <div>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage