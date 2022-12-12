import { useRef, useState, useContext } from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import { Navbar } from "../src/comp/navBar";
import { AuthContext } from './providers/auth-context';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      <AuthContext.Provider value={{
        currentUser,
        setCurrentUser
      }}>
        <Navbar />
        <Outlet />
      </AuthContext.Provider>
    </>
  )
}

export default App;
