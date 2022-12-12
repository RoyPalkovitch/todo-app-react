import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/auth-context"

export function Navbar() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/`}>Home</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {currentUser ? (
              <li className="nav-item">
                <Link className="nav-link" to={`todosApp`}>Todos</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to={`sign-in`}>Sign In</Link>
              </li>
            )}

          </ul>
        </div>
        {currentUser && (
          <>
            <p>Hello {currentUser.name}</p>
            <button onClick={() => setCurrentUser(null)}>sign out</button>
          </>
        )}
      </div>
    </nav>
  )
}