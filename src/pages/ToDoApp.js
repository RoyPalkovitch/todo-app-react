import { useRef, useContext, useEffect } from 'react';
import { TodosApp } from '../comp/todos-app';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/auth-context'
import { ScreenContext } from '../providers/appscreen-context';

export function ToDoApp() {
  const { currentUser } = useContext(AuthContext);
  const {todosScreen, settodoScreens} = useContext(ScreenContext);
  let navigate = useNavigate();
  
  useEffect(() =>{
    !currentUser && navigate('/');
  },[currentUser,navigate])

  const newTodoTitleRef = useRef();

  const addList = () => {
    const appName = newTodoTitleRef.current.value;
    newTodoTitleRef.current.value = '';
    todosScreen.push(<TodosApp key={todosScreen.length} appName={appName} />);
    settodoScreens([...todosScreen]);
  }

  return (
    <>
      <div>
        <input ref={newTodoTitleRef} type="text" />
        <button onClick={addList}>ADD LIST</button>
      </div>
      {todosScreen.map(screen => (screen))}
    </>

  );
}