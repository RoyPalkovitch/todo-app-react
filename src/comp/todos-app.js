import { Header } from './header'
import { ToggleAll } from './main.js';
import { Footer } from './footer.js';
import { ToDoList } from './todoslist';
import { CreateLi } from "./todolistitem";
import { ListContext } from '../providers/list-context'
import {useTodos} from '../hooks/useTodos'

export function TodosApp({appName}){
  const todosApi = useTodos();
  const currentView = todosApi.currentView;
  return (
    <ListContext.Provider value={todosApi}>
    <section className="todoapp">
      <Header title={appName} />
      <ToggleAll>
        <ToDoList>
          {currentView.todos.map(todo => {
            return (
              <CreateLi key={todo.id} todo={todo}/>
              )
          })}
        </ToDoList>
      </ToggleAll>
      <Footer />
    </section>
    </ListContext.Provider>
  );
}
