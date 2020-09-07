import React, { useState } from "react";
import "./styles.css";

export default function ToDo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const { id, done, text, onChange, onDelete, onTextChanged } = props;
  const classes = [];

  // ---- start of classes manipulation
  // conditional application of class when user finished editing
  if (done) {
    classes.push("completed");
  }
  // conditional application of class when user wants to start editing

  if (isEditing) {
    classes.push("editing");
  }
  // end class manipulation

  // this start editing handler will make the boolean true to render editing comonent/input
  // also will temporarily hold the value in state till user makes it permanent by clicking on enter button after editing

  const startEditing = () => {
    setIsEditing(true);
    setCurrentValue(text);
  };

  // this function makes it permanent whatever the user has edited the value after user
  // presses enter button
  const handleTextChange = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    // this props.ontextchanged methods sends back the value to parent component todolist
    // as well as hides the editing component
    onTextChanged(currentValue);
    setCurrentValue("");
    setIsEditing(false);
  };
  return (
    <li onDoubleClick={startEditing} className={classes.join(" ")}>
      <div className="view">
        <input
          id={`todo-${id}`}
          className="toggle"
          type="checkbox"
          checked={done}
          onChange={onChange}
        />
        <label htmlFor={`todo-${id}`} className="label-text">
          {text}
        </label>
        <button className="destroy" onClick={onDelete} />
      </div>

      {/* this editing section will only be shown when user is editing
      the todo item..otherwise it will not be shown
      see how isEditing boolean is used to hide/show it based on
      whether user has double clicked to edit a todo item  */}
      {isEditing && (
        <input
          onKeyPress={handleTextChange}
          value={currentValue}
          onChange={(event) => setCurrentValue(event.target.value)}
          type="text"
          className="edit"
        />
      )}
    </li>
  );
}