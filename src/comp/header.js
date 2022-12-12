import { useContext, useRef } from "react";
import { ListContext } from "../providers/list-context";

export function Header(props) {
  const {addTodo} = useContext(ListContext);
  const user = {name:'roy',role:'Admin'}
  const addTodoInputRef = useRef(null);
  function addToDoClickHandler(event) {
    if (event.key === "Enter") {
      addTodo(addTodoInputRef.current.value);
      addTodoInputRef.current.value = '';
    }
  }

  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <input
        type={'text'}
        ref={addTodoInputRef}
        className={'new-todo'}
        placeholder={`Hello ${user.name}, What needs to be done?`}
        onKeyUp={addToDoClickHandler}
        autoFocus />
    </header>
  )
}

