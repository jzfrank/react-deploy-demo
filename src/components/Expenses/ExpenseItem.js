import "./ExpenseItem.css";
import "./ExpeneseDate";
import ExpenseDate from "./ExpeneseDate";
import Card from "../UI/Card";
// import { useState } from "react/cjs/react.production.min";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [num, setNum] = useState(0);
  const clickHandler = () => {
    // console.log("clicked!");
    setNum(num + 1);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Number of clicks: {num}</button>
    </Card>
  );
}

export default ExpenseItem;
