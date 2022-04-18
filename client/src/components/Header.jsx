import { FaMoneyBill, FaUser, FaSignInAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <FaMoneyBill />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/categories">Catégories</Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> SingIn
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
