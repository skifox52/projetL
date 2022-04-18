import { FaUser } from "react-icons/fa"

function Login() {
  return (
    <div className="login">
      <h1>
        <FaUser /> Login
      </h1>
      <form>
        <input type="text" placeholder="Name..." />
        <input type="password" placeholder="Password..." />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
