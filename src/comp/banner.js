import { useContext } from "react";
import { AuthContext } from "../providers/auth-context"
import { Link } from "react-router-dom";

export function Banner() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  function logOut() {
    setCurrentUser(null);
  }

  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Welcome to my blog!</h1>
          <p className="lead text-muted">Something short and leading about
            the collection below—its contents, the creator, etc. Make it
            short and sweet, but not too short so folks don’t simply skip
            over it entirely.</p>
          <p>
            {currentUser ? (<button className="btn btn-primary my-2" onClick={logOut}>
              Log Out
            </button>) : (
              <Link className="btn btn-primary my-2" to={'/sign-in'}> SIGN IN</Link>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}