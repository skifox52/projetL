import { FaUser, FaSignInAlt, FaSignOutAlt, FaDashcube } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { logout, reset } from "../features/auth/authSlice"
import { useSelector, useDispatch } from "react-redux"

function Header() {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = (e) => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <FaDashcube /> <p>Dashboard</p>
        </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button onClick={onLogout} className="logout-btn">
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
