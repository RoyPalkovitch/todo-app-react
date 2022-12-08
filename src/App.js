import './App.css';
import { Header } from './comp/header.js';
import { ToggleAll } from './comp/main.js';
import { Footer } from './comp/footer.js';
import { ToDoList } from './comp/todolist';
import { CreateLi } from "./comp/todolistitem";
import { useEffect, useState } from 'react';

function App() {
  const appTitle = "todos";
  const [todos, setTodos] = useState([]);
  const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(setTodos);

  }, []);

  useEffect(() => {
    const uncompleted = todos.filter(todo => !todo.completed).length;
    setNoneCompletedItemsCount(uncompleted);
  }, [todos]);

  const addTodo = (title) => {
    if (!title) return;
    const newTodos = [...todos, { title, completed: false }];
    setTodos(newTodos);
    console.log(newTodos);
  }

  const removeTodo = (todoToRemove) => {
    const newTodos = todos.filter(todo => todo !== todoToRemove);
    setTodos(newTodos);
    console.log(newTodos);
  };

  const clearAllCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
    console.log(newTodos);
  }


  const toggleAll = (checkboxState) => {
    const newTodos = todos.map(todo => ({ ...todo, completed: checkboxState }))
    setTodos(newTodos);
    console.log(newTodos);
  }

  const markAsCompleted = (checked, todo, setTodo) => {
    todo.completed = checked;
    setTodo({ ...todo });
  }

  const saveEditedLabel = (todo, newTitle) => {
    todo.title = newTitle;
  }


  return (
    <section className="todoapp">
      <Header className="header"
        title={appTitle}
        adding={addTodo} />
      <ToggleAll className="main" toggleAll={toggleAll} >
        <ToDoList>
          {todos.map(todo => {
            return (
              <CreateLi todo={todo}
                removeTodo={removeTodo}
                markAsCompleted={markAsCompleted}
                saveEditedLabel={saveEditedLabel}
              />)
          })}
        </ToDoList>
      </ToggleAll>
      <Footer className="footer"
        countItemsLeft={noneCompletedItemsCount}
        clearAllCompleted={clearAllCompleted} />
    </section>
  );
}

export default App;
