import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  console.log(props.items);
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear((preselected) => {
      return [preselected, ...selectedYear];
    });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangefilter={filterChangedHandler}
        />
        {props.items.map((expense) => {
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
