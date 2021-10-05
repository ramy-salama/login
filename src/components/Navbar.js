import { Link } from "react-router-dom";

 
const Navbar = (props) => {


   const logOut = () => {
     sessionStorage.removeItem("token");
  };
  
  // console.log(props);
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>We can do it</h1>
      </div>

      {sessionStorage.getItem("token") ? (
        <div className="home">
          <h3>Hello {props.userData.username} </h3>
          <Link to="/">
            <a href="*">Home</a>
          </Link>
          <Link to="/classes">
            <a href="*">Classes</a>
          </Link>

          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <div className="link">
          <h1>Plesase sign in</h1>
          <Link to="/">
            <a href="*">Home</a>
          </Link>
          <Link to="/SignIn">
            <a href="*">Sign In</a>
          </Link>
          <Link to="/SignUp">
            <a href="*">Sign Up</a>
          </Link>
        </div>
      )}
    </nav>
  );
  }
export default Navbar;