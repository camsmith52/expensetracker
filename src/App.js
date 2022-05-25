import React from "react";
import { useState } from "react";
import HeadComponent from "./components/HeadComponent";
import HistoryComponent from "./components/History";
import AddNewTransaction from "./components/AddNewTransaction";

function App() {
  //State
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <HeadComponent list={list} />
      <br></br>
      <br></br>
      <HistoryComponent list={list} setList={setList} />
      <br></br>
      <br></br>
      <AddNewTransaction
        text={text}
        setText={setText}
        amount={amount}
        setAmount={setAmount}
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;
