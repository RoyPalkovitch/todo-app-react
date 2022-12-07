

export function CreateLi(props) {
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
  
  let addClass = "";
  if(props.value.completed){
    addClass = "completed"; 
  }
  return <li className={addClass}>
    <div className="view">
      <input className="toggle" type="checkbox" defaultChecked={props.value.completed} onChange={(e) => { 
           props.markAsCompleted(props.value); }} />
     <label onDoubleClick={enableEditLabel}>{props.value.title}</label>
      <button className="destroy" onClick={(e) => {
        props.removeTodo(props.value);
      }} />
    </div>
    <input onBlur={(e) => handleSaveEditedLabel(e, props.value)} className="edit" />
  </li>
}