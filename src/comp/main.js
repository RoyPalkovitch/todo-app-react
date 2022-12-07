
import {ToDoList} from './todolist';

export function Section(props) {
 
  function handleToggleAll(event){
    props.toggleAll(event.target.checked);
  }

  return <section className={props.className}>
    <input className="toggle-all" type="checkbox" onChange={handleToggleAll} />
    <ToDoList todos={props.todos}
     removeTodo={props.removeTodo}
      markAsCompleted={props.markAsCompleted} 
      saveEditedLabel={props.saveEditedLabel}/>
  </section>
}




