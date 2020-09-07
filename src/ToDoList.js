import React, { useState } from "react";
import ToDo from "./ToDo";
import "./styles.css";

export default function ToDoList() {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState("");
  //const [displayActiveItems, setDisplayActiveItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const activeItems = allItems.filter((item) => !item.done);
  // total 7 handler functions
  // 3 for individual todo items - 1 for onchange(mzkin it controlled input), deleting, editing
  // the above functions are passed as props to ToDo component
  // 3 for inputtype text component- 1 for onchange(controlled), adding, helper function
  // 1 for clear complete button

  // Start of individual todo item handlers

  // handle change is for capturing every letter user types
  // while editing the todo inidividual item  its a controlled input/component
  // and conditionally rendered only when user has already added a todo item and double clicked on it
  // to edit it.

  const handleChange = (item) => {
    const index = items.indexOf(item);
    const newItems = [...items];
    newItems[index] = {
      ...item,
      // i don;t know he is toggling the done while editing/doublclicking the item
      done: !item.done
    };

    setItems(newItems);
    setAllItems(newItems);
  };

  //change text is for editing the todo item and making it permanent(onclick)
  const changeText = (item, text) => {
    const index = items.indexOf(item);
    const newItems = [...items];
    newItems[index] = {
      ...item,
      text
    };

    setItems(newItems);
    setAllItems(newItems);
  };

  // handle delete is for deleting the todo item by
  // clicking on x button on right side of todo item.
  const handleDelete = (item) => {
    // its better to perform the below by storing the operation
    // in another variable and then providing that to setItems
    setItems(items.filter((current) => current !== item));
    setAllItems(allItems.filter((current) => current !== item));
  };

  // End of handler functions for inididual todo items

  // Start handler functions for input component for entering/adding todo items
  // this add item function is not assigned/called from any html element
  // but handlformsubmit function call its- so its called helper function
  //refer to handleforsubmit function and see its being called there
  const addItem = (text) => {
    if (text.length === 0) {
      return;
    }
    const newItem = {
      id: `${+new Date()}`,
      // for every new item added - done by default is added as false
      done: false,
      text
    };

    setItems([...items, newItem]);
    setAllItems([...allItems, newItem]);
    setNewItemText("");
  };

  // handleformsubmit is for pressing the enter button on input type
  // to add the item to todolist
  const handleFormSubmit = (event) => {
    event.preventDefault();

    addItem(newItemText);
  };

  // this function makes the input type for adding todo list as controlled
  // as it captures every keystroke and sets in our state
  const handleNewItemTextChange = (event) => {
    // its better to perform the below by storing the operation
    // in another variable and then providing that to setItems
    setNewItemText(event.target.value);
  };
  // End of handler functions for input type element/component for
  // adding todo items

  const handleKeyPress = (e) => {
    // e.preventDefault();
    if (e.key === "Enter") {
      addItem(newItemText);
    }
  };
  // clear trigger is completed when user clicks on cler completed button/text
  const clearCompleted = () => {
    // its better to perform the below by storing the operation
    // in another variable and then providing that to setItems
    setItems(items.filter((item) => !item.done));
    setAllItems(allItems.filter((item) => !item.done));
  };

  const allHandler = () => {
    setItems(allItems);
  };

  const activeHandler = () => {
    let activeItems = allItems.filter((item) => !item.done);
    console.log(activeItems, "inside active items");
    setItems(activeItems);
  };
  const completeHandler = () => {
    let completedItems = allItems.filter((item) => item.done);
    setItems(completedItems);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        {/* <form onSubmit={handleFormSubmit}> */}
        <input
          //  onKeyPress={handleEnter}
          // this event handler function couldn't be found even in the original
          // however this input type is wrapped  in a Form that has a event (handleFormsbmit)
          // that is activating on enter(submit) to add the typed todo into our state.

          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus=""
          value={newItemText}
          onChange={handleNewItemTextChange}
          onKeyPress={handleKeyPress}
        />
        {/* </form> */}
      </header>

      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {items.map((item) => (
            <ToDo
              key={item.id}
              id={item.id}
              text={item.text}
              done={item.done}
              onChange={() => handleChange(item)}
              onDelete={() => handleDelete(item)}
              onTextChanged={(text) => changeText(item, text)}
            />
          ))}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{activeItems.length}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <button onClick={allHandler} className="selected">
              All
            </button>
          </li>
          <li>
            <button onClick={activeHandler}>Active</button>
          </li>
          <li>
            <button onClick={completeHandler}>Completed</button>
          </li>
        </ul>
        <button onClick={clearCompleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
}