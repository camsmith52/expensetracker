import React from "react";

const AddNewTransaction = ({
  text,
  setText,
  amount,
  setAmount,
  list,
  setList,
}) => {
  const onAddTransaction = () => {
    if (!amount || !text) return; //to avoid breakage if the user clicks add transaction without first adding text or amount
    setList([...list, { text: text, amount: Number(amount) }]); //copies the old list and adds in the object created for the transaction
    setAmount("");
    setText("");
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <label>Text</label>
      <input
        type="text"
        required
        value={text}
        placeholder="Add transaction"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <label>Amount</label>
      <input
        type="text"
        required
        value={amount}
        placeholder="Add amount (- for expenses)"
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <button onClick={onAddTransaction}>Add transaction</button>
    </div>
  );
};

export default AddNewTransaction;

//initial challenges.
//1. Changing the number from a string to a number (finding the correct place to do it)
//2.
