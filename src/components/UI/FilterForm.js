import { useState } from "react";

const FilterForm = (props) => {
  //con  questa tipologia prendi sempre l'ultimo stasto in cui si trova il valore
  const [enteredAmount0, setEnteredAmount0] = useState(
    props.FilterForm[0].amount
  );
  const [enteredAmount1, setEnteredAmount1] = useState(
    props.FilterForm[1].amount
  );
  const [enteredAmount2, setEnteredAmoun2] = useState(
    props.FilterForm[2].amount
  );
  const [enteredAmount3, setEnteredAmoun3] = useState(
    props.FilterForm[3].amount
  );
  const [enteredAmount4, setEnteredAmoun4] = useState(
    props.FilterForm[4].amount
  );
  const [enteredAmount5, setEnteredAmoun5] = useState(
    props.FilterForm[5].amount
  );
  const [enteredAmount6, setEnteredAmoun6] = useState(
    props.FilterForm[6].amount
  );
  const [enteredAmount7, setEnteredAmoun7] = useState(
    props.FilterForm[7].amount
  );
  const [enteredAmount8, setEnteredAmoun8] = useState(
    props.FilterForm[8].amount
  );
  const [enteredAmount9, setEnteredAmoun9] = useState(
    props.FilterForm[9].amount
  );
  const [enteredAmount10, setEnteredAmount10] = useState(
    props.FilterForm[10].amount
  );
  const [enteredAmount11, setEnteredAmount11] = useState(
    props.FilterForm[11].amount
  );

  const amountChangeHandler = (event) => {
    console.log(event);
    //setEnteredAmount(event.target.value);
    // console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    /*const expenseData = {
      amount: enteredAmount,
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    */
  };
  return (
    <form onSubmit={submitHandler}>
      <div value={enteredAmount0} onChange={amountChangeHandler}></div>
      <div value={enteredAmount1} onChange={amountChangeHandler}></div>
      <div value={enteredAmount2} onChange={amountChangeHandler}></div>
      <div value={enteredAmount3} onChange={amountChangeHandler}></div>
      <div value={enteredAmount4} onChange={amountChangeHandler}></div>
      <div value={enteredAmount5} onChange={amountChangeHandler}></div>
      <div value={enteredAmount6} onChange={amountChangeHandler}></div>
      <div value={enteredAmount7} onChange={amountChangeHandler}></div>
      <div value={enteredAmount8} onChange={amountChangeHandler}></div>
      <div value={enteredAmount9} onChange={amountChangeHandler}></div>
      <div value={enteredAmount10} onChange={amountChangeHandler}></div>
      <div value={enteredAmount11} onChange={amountChangeHandler}></div>
      <button type="submit">Add Expense</button>
    </form>
  );
};
export default FilterForm;
