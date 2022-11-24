import React from "react";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
      <button onClick={() => handleDelete(item.id)}>x</button>
    </li>
  );
};

export default LineItem;
