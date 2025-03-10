import React from "react";
/*import { useState } from "react";

const DynamicList = () => {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div>
      <h2>Fruits List:</h2>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter a fruit"
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
*/
const DynamicList = () => {
    const fruits = ["Apple", "Banana", "Cherry"];
  
    return (
      <div>
        <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit} </li>
        ))}
        </ul>
      </div>
    );
  };
export default DynamicList;
