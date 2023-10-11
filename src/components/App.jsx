import React, { useState } from "react";

function App() {
  const [enterTittle, setEnteredTittle] = useState("");
  const [enterAmount, setEnteredAmount] = useState("");
  const [enterDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput]= useState({
  //   enterTittle: "",
  //   enterAmount:"",
  //   enterDate:"",
  // })

  function tittleHandler(event) {
    setEnteredTittle(event.target.value);
  }
  function amountHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateHandler(event) {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expesenDate = {
      tittle: enterTittle,
      amount: enterAmount,
      date: new Date(enterDate)
    };
    setEnteredTittle("");
    setEnteredAmount("");
    setEnteredDate("");
    console.log(expesenDate);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="input">
          <div className="input">
            <label>Tittle</label>
            <input type="text" onChange={tittleHandler} value={enterTittle} />
          </div>

          <div className="new-expense__controls">
            <label>Amount</label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              onChange={amountHandler}
              value={enterAmount}
            />
          </div>

          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              min="2018-08-14"
              max="2022-08-14"
              onChange={dateHandler}
              value={enterDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button className="button" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
export default App;
