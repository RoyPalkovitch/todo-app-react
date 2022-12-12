import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../providers/list-context";

export function Footer() {
  const {changeCurrentView, noneCompletedItemsCount, clearAllCompleted} = useContext(ListContext);
  let navigate = useNavigate();
  function changeViewHandle(view){
    changeCurrentView(view);
    view === 'All'?(
      navigate('/todosApp')
    ):( 
      navigate('/todosApp/'+view.toLowerCase())
      );
 
  }

  return (
    <footer className='footer'>
      <span className="todo-count"><strong>{noneCompletedItemsCount}</strong> items left</span>
      <button className="clear-completed" onClick={clearAllCompleted}>Clear completed</button>
      <button className="clear-completed" onClick={() => changeViewHandle('All')}>All</button>
      <button className="clear-completed" onClick={() => changeViewHandle('Active')}>Active</button>
      <button className="clear-completed" onClick={() => changeViewHandle('Completed')}>Completed</button>
    </footer>
  )
}
