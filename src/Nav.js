import {Link,NavLink} from "react-router-dom"

const Nav = ({ inHeader, laClase }) => {

  return (
    <nav className={laClase}>
      <NavLink to="/carrito">Shopping Cart</NavLink>
      <NavLink to={inHeader ? "/categoria/jewelery" : "http://facebook.com"}>{inHeader ? "Jewelery" : "facebook"}</NavLink>
      <NavLink to="/categoria/electronics">{inHeader ? "Electronics" : "instagram"}</NavLink>
      <NavLink to="/categoria/clothing">{inHeader ? "Clothing" : "linkedin"}</NavLink>
    </nav>
  )
}

export default Nav  