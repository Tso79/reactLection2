import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import { useState } from "react";

const dummmy_expenses = [
  {
    id: 0,
    title: "Primo",
    amount: 189.0,
    date: new Date(2022, 4, 28),
    times: 0,
  },
  {
    id: 1,
    title: "Seondo",
    amount: 269.0,
    date: new Date(2022, 2, 15),
    times: 0,
  },
  {
    id: 2,
    title: "terzo",
    amount: 100.0,
    date: new Date(2022, 2, 28),
    times: 0,
  },
  {
    id: 3,
    title: "quarto",
    amount: 199.0,
    date: new Date(2022, 0, 15),
    times: 0,
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummmy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
