import { useEffect, useState } from 'react';

export function CreateLi(props) {
  let [todo, setTodo] = useState(props.todo);
  let [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    setTodo({ ...props.todo });
  }, [props.todo, editingMode]);

  const enableEditLabel = (e) => {
    setEditingMode(true);
  }

  const handleSaveEditedLabel = (e) => {
    props.todo.title = e.target.value;
    setEditingMode(false);
  }

  return (
    <li className={todo.completed ? 'completed' : '' + (editingMode ? 'editing': '')}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            props.markAsCompleted(e.target.checked, props.todo, setTodo);
          }} />
        <label onDoubleClick={enableEditLabel}>
          {todo.title}
        </label>
        <button className="destroy" onClick={() => {
          props.removeTodo(props.todo);
        }} />
      </div>
      <input key={todo.title} defaultValue={todo.title} onKeyUp={(e) => {
        if (e.key === "Enter") {
          handleSaveEditedLabel(e);
          // const li = e.target.parentElement;
          // li.classList.remove('editing');
        }
      }} onBlur={(e) => {
        handleSaveEditedLabel(e);
        // const li = e.target.parentElement;
        // li.classList.remove('editing');
      }}
        className="edit" />
    </li>)
}