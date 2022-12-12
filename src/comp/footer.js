import { useContext } from "react";
import { ListContext } from "../providers/list-context";

export function Footer() {
  const {changeCurrentView, noneCompletedItemsCount, clearAllCompleted} = useContext(ListContext);

  function changeViewHandle(view){
    changeCurrentView(view);
  }

  return (
    <footer className='footer'>
      <span className="todo-count"><strong>{noneCompletedItemsCount}</strong> items left</span>
      <button className="clear-completed" onClick={clearAllCompleted}>Clear completed</button>
      <button className="clear-completed" onClick={() => changeViewHandle('All Tasks')}>All</button>
      <button className="clear-completed" onClick={() => changeViewHandle('Active')}>Active</button>
      <button className="clear-completed" onClick={() => changeViewHandle('Completed')}>Completed</button>
    </footer>
  )
}
