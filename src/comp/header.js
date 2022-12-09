

export function Header(props) {

  function addToDoClickHandler(event) {
    if (event.key === "Enter") {
      props.addTodo(event.target.value);
      event.target.value = '';
    }
  }


  return (
    <header className={props.className}>
      <h1>todos</h1>
      <input
        type={'text'}
        className={'new-todo'}
        placeholder={'What needs to be done?'}
        onKeyUp={addToDoClickHandler}
        autoFocus />
    </header>
  )
}

