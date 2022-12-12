import { useContext, useRef } from "react";
import { AuthContext } from "../providers/auth-context";
import { useNavigate } from 'react-router-dom';


export function SignIn() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { setCurrentUser } = useContext(AuthContext);
  let navigate = useNavigate();

  function handleSubmit() {


    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then((user) => {
        setCurrentUser(user);
        navigate('/todosApp');
      })
  }

  return (
    <main className="form-signin w-100 m-auto">
    <form>
      <h1 className="h3 mb-3 fw-normal">Please SignIn</h1>

      <div className="form-floating">
        <input type="email"
          ref={emailInputRef}
          className="form-control"
          placeholder="name@example.com" />
        <label>Email address</label>
      </div>
      <div className="form-floating">
        <input type="password"
          ref={passwordInputRef}
          className="form-control"
          placeholder="Password" />
        <label >Password</label>
      </div>

      <button className="w-100 btn btn-lg btn-primary"
        onClick={handleSubmit}
        type="button">Sign in</button>
    </form>
  </main>
  )


}