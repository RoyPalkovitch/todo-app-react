import { useEffect, useState } from 'react';

export function CreateLi(props) {
  let [todo, setTodo] = useState(props.todo);

  useEffect(() => {
    setTodo({ ...props.todo });
  }, [props.todo]);

  const enableEditLabel = (e) => {
    const li = e.target.parentElement.parentElement;
    li.classList.toggle('editing');
    const input = li.querySelector('.edit');
    input.focus();
  }

  const handleSaveEditedLabel = (e) => {
    props.todo.title = e.target.value;
    setTodo({ ...props.todo });
  }

  return (
    <li className={todo.completed ? 'completed' : ''}>
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
      <input defaultValue={todo.title} onKeyUp={(e) => {
        if (e.key === "Enter") {
          handleSaveEditedLabel(e);
          const li = e.target.parentElement;
          li.classList.remove('editing');
        }
      }} onBlur={(e) => {
        handleSaveEditedLabel(e);
        const li = e.target.parentElement;
        li.classList.remove('editing');
      }}
        className="edit" />
    </li>)
}