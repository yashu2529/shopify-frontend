import { Link } from "react-router-dom";

function Navbar() {
  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

 return (
   <nav>
     <Link to="/">Home</Link>

     <Link to="/products">
       Products
     </Link>
  
      {!user && (
        <>
          <Link to="/register">
            Register
          </Link>

          <Link to="/login">
            Login
          </Link>
        </>
      )}

      
      {user && (
        <Link to="/logout">
          Logout
        </Link>
      )}
      <Link to="/wishlist">Wishlist</Link>
   </nav>
 );
}

export default Navbar;
