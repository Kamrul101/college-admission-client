import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
      logOut()
        .then(() => {})
        .then((error) => {
          console.log(error);
        });
    };
  
  
    
  
    const navOption = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/order/salad">Order Food</Link>
        </li>
        
      </>
    );
    return (
      <>
        <div className="navbar   bg-opacity-30 bg-black text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
              >
                {navOption}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Bistro</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOption}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="btn btn-info text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-accent text-white" to="/login">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;
  