import './App.css';
import { Header } from './comp/header.js';
import { Section } from './comp/main.js';
import { Footer } from './comp/footer.js';
import {useEffect, useState} from 'react';

function App() {
  const appTitle = "todos";
  const [todos, setTodos] = useState([]);
  const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(setTodos);
  },[]);

  useEffect(() => {
    const uncompleted = todos.filter(todo => !todo.completed).length;
    setNoneCompletedItemsCount(uncompleted);
  },[todos]);

  const addTodo = (title) => {
    const newTodos = [...todos, { title, completed: false }];
    setTodos(newTodos);
    console.log(newTodos);
  }

  const removeTodo = (todoToRemove) => {
    const newTodos = todos.filter(todo => todo !== todoToRemove);
    setTodos(newTodos);
    console.log(newTodos);
  };

  const saveEditedLabel = (todo, value) => {
    todo.title = value;
    setTodos([...todos]);
    console.log(todos);
  }

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

  const markAsCompleted = (value) => {
    value.completed = !value.completed;
    setTodos([...todos]);
    console.log(todos);
  }




  return (
    <section className="todoapp">
      <Header className="header" title={appTitle} adding={addTodo} />
      <Section className="main" saveEditedLabel={saveEditedLabel} todos={todos} toggleAll={toggleAll} markAsCompleted={markAsCompleted} removeTodo={removeTodo} />
      <Footer className="footer" countItemsLeft={noneCompletedItemsCount} clearAllCompleted={clearAllCompleted} />
    </section>
  );
}

export default App;
