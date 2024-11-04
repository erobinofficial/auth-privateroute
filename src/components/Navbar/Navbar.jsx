import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("successfully logout");
      })
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/orders">Orders</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NavLink className="btn btn-ghost text-xl" to="/">
          daisyUI
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        {user ? (
          <>
            <span>{user.displayName}</span>
            <button onClick={handleLogOut} className="btn btn-sm">
              Sign Out
            </button>
          </>
        ) : (
          <Link className="btn btn-sm" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
