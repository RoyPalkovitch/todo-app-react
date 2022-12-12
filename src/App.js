import {useState} from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import { Navbar } from "../src/comp/navBar";
import { AuthContext } from './providers/auth-context';
import { ScreenContext } from './providers/appscreen-context';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [todosScreen, settodoScreens] = useState([]);

  return (
    <>
      <AuthContext.Provider value={{
        currentUser,
        setCurrentUser
      }}>
        <ScreenContext.Provider value={{ todosScreen, settodoScreens }}>
          <Navbar />
          <Outlet />
        </ScreenContext.Provider>
      </AuthContext.Provider>
    </>
  )
}

export default App;
