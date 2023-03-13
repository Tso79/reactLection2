import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  console.log(props.items);
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    console.log(
      JSON.stringify(expense) +
        " estrae data-> " +
        expense.date.getFullYear().toString() +
        "data filtrata-> " +
        filteredYear
    );
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log("vettore filtraro -> " + [...filteredExpenses]);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangefilter={filterChangedHandler}
        />
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}
