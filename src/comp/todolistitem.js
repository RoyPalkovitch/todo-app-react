import { useContext, useEffect, useRef, useState } from 'react';
import { ListContext } from '../providers/list-context';

export function CreateLi(props) {
  const [editingMode, setEditingMode] = useState(false);
  const editInputRef = useRef(null);
  const markCompletedInputRef = useRef(null);

  const {markAsCompleted, saveEditedLabel,removeTodo}=useContext(ListContext);
  useEffect(() =>{
    editingMode && editInputRef.current.focus();
    !editingMode && editInputRef.current.blur();
  },[editingMode])

  const markAsCompletedHandler = () =>{
    markAsCompleted(markCompletedInputRef.current.checked, props.todo)
  }

  const enableEditLabel = () => {
    setEditingMode(true);
  }

  const handleSaveEditedLabel = (e) => {
    saveEditedLabel(props.todo, editInputRef.current.value)
    setEditingMode(false);
  }

  return (
    <li className={props.todo.completed ? 'completed' : '' + (editingMode ? 'editing': '')}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.todo.completed}
          ref={markCompletedInputRef}
          onChange={markAsCompletedHandler} />
        <label onDoubleClick={enableEditLabel}>
          {props.todo.title}
        </label>
        <button className="destroy" onClick={() => {
          removeTodo(props.todo);
        }} />
      </div>
      <input ref={editInputRef} defaultValue={props.todo.title} onKeyUp={(e) => {
        if (e.key === "Enter") {
          handleSaveEditedLabel(e);
        }
      }} onBlur={(e) => {
        handleSaveEditedLabel(e);
      }}
        className="edit" />
    </li>)
}