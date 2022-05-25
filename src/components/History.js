import React from "react";

const HistoryComponent = ({ list, setList }) => {
  const onClickDelete = (index) => {
    const filtered = list.filter((item, i) => i !== index); //only lets the remaining items into the new array
    setList(filtered); //updates the list with the remianing items
  };

  const clearHistory = () => {
    setList([]);
  };

  const rendered = list.map((item, index) => {
    return (
      <div
        key={index}
        className="ui list"
        style={
          item.amount >= 0
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
      >
        
        {/*bad key but okay for this size project*/}
        <div className="item">
          <div>{item.text}</div>
          <div>{item.amount}</div>
          <div className="button right">
            <button onClick={() => onClickDelete(index)}>Delete</button>{" "}
            {/*passing the index of the particular list item to the delete function to try match up later for deletion */}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h3>History:</h3>
      {rendered}
      <button
        onClick={clearHistory}
        style={{ marginTop: "10", marginBottom: "10" }}
      >
        Clear history
      </button>
    </div>
  );
};

export default HistoryComponent;
