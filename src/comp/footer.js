export function Footer(props) {
  return (
    <footer className={props.className}>
      <span className="todo-count"><strong>{props.countItemsLeft}</strong> items left</span>
      <button className="clear-completed" onClick={props.clearAllCompleted}>Clear completed</button>
    </footer>
  )
}
