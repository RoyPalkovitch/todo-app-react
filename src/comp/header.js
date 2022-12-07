

export function Header(props){

  function clickHandler(event){
    if(event.key === "Enter"){
      props.adding(event.target.value);
    }
  }

  function MainInput(props){
    return <input type={props.type} className={props.className} placeholder={props.placeholder} onKeyUp={clickHandler} autoFocus />
  }

  return <header className={props.className}>
            <h1>todos</h1>
    <MainInput type="text" className="new-todo" placeholder="What needs to be done?"/>
    </header>
}

