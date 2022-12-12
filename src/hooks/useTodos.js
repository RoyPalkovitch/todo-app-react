import { useEffect, useState } from 'react';

export function useTodos(){
  
const [todos, setTodos] = useState([]);
const [currentView, setCurrentView] = useState({view:'All',todos:[]});
const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(setTodos);

}, []);

useEffect(() => {
  if(currentView.view === "All"){
    setCurrentView({view:'All',todos});
  }else if(currentView.view === "Completed"){
    setCurrentView({view:'Completed',todos: todos.filter(todo => todo.completed )});
  }else if(currentView.view === "Active"){
    setCurrentView({view:'Active',todos:todos.filter(todo => !todo.completed )});
  }
},[todos, currentView.view]);

useEffect(() => {
  const uncompleted = todos.filter(todo => !todo.completed).length;
  setNoneCompletedItemsCount(uncompleted);
}, [todos]);



const addTodo = (title) => {
  if (!title) return;
  const newTodos = [...todos, {id:Date.now() ,title, completed: false }];
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

const markAsCompleted = (checked, todo) => {
  todo.completed = checked;
  setTodos([ ...todos ]);
}

const saveEditedLabel = (todo, newTitle) => {
  todo.title = newTitle;
}

const changeCurrentView = (viewToChange) =>{
  if(viewToChange === "All"){
    setCurrentView({view:viewToChange, todos:todos});
  }else if(viewToChange === "Completed"){
    setCurrentView({view:viewToChange,todos: todos.filter(todo => todo.completed )});
  }else if(viewToChange === "Active"){
    setCurrentView({view:viewToChange,todos:todos.filter(todo => !todo.completed )});
  }
}

return {
  todos,
  currentView,
  noneCompletedItemsCount,
  addTodo,
  removeTodo,
  clearAllCompleted,
  toggleAll,
  markAsCompleted,
  saveEditedLabel,
  changeCurrentView
}
}

