import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [FInput , setFInput] = useState("")
  const [Items , setItems] = useState([])


  function HandleInput(event){
    const InputValue = event.target.value
    setFInput(InputValue)
  }

  function AddItem(){
    setItems((prevItems) =>{
      return [...prevItems, FInput]
    })
    setFInput("")
  }

  function deleteItem(id){
      setItems(prevItems => {
        return (
            prevItems.filter(
                (item,index) => {
                    return index!==id
                }
            )
        )
      })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={HandleInput} type="text" value={FInput}/>
        <button onClick={AddItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            Items.map((todoItem, index) =>( 
              <TodoItem 
              todoItem key={index}
              id={index}
              text ={todoItem}
              onChecked={deleteItem}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
