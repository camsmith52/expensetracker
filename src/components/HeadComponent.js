import React, { useEffect, useState } from "react";

const HeadComponent = ({ list }) => {
  // State
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  //Hooks
  useEffect(() => {
    setIncome(0);
    setExpenses(0);

    for (let index = 0; index < list.length; index++) {
      if (list[index].amount > 0) {
        setIncome((prev) => prev + list[index].amount);
      } else {
        setExpenses((prev) => prev + list[index].amount);
      }
    }
  }, [list]);

  return (
    <div>
      <h4>Balance = {income - Math.abs(expenses)}</h4>
      <div>Income = {income}</div>
      <div>Expenses = {expenses}</div>
    </div>
  );
};

export default HeadComponent;

//Challenge experienced: deleting an item from the array. Initially used another useEffect hook - gave loads of problems. Realized didn't need it
// Created extra state for the delted item (which was an object) and was trying to add back the delted income or expense to the total - overcomplicated
