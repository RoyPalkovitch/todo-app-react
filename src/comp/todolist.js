

import {CreateLi} from "./todolistitem"

export function ToDoList(props){
  const enableEditLabel = (e) => {
    const li = e.target.parentElement.parentElement;
    li.classList.toggle('editing');
    const input = li.querySelector('.edit');
    input.value = e.target.innerText;
    input.focus();
  }
  
  const handleSaveEditedLabel = (e, todo) => {
    props.saveEditedLabel(todo, e.target.value)
  }

  function CreateLi(props) {

    return <li className={props.value.completed ?'completed':''}>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={props.value.completed} onChange={(e) => { 
             props.markAsCompleted(props.value); }} />
       <label onDoubleClick={enableEditLabel}>{props.value.title}</label>
        <button className="destroy" onClick={() => {
          props.removeTodo(props.value);
        }} />
      </div>
      <input onKeyUp={(e) => {
        if(e.key === "Enter"){
          handleSaveEditedLabel(e, props.value)
        }
      }} onBlur={(e) => handleSaveEditedLabel(e, props.value)} className="edit" />
    </li>
  }

  return(
    <ul className="todo-list">
    {props.todos.map((todo) => <CreateLi value={todo}
     removeTodo={props.removeTodo} 
     markAsCompleted={props.markAsCompleted} />)}
    </ul>
  )
}