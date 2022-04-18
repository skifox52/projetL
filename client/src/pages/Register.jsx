import { FaSignInAlt } from "react-icons/fa"

function Register() {
  return (
    <div className="register">
      <h1>
        <FaSignInAlt /> SignIn
      </h1>
      <form>
        <div className="input">
          <label htmlFor="name">Name </label>
          <input type="text" id="name" placeholder="Enter your name..." />
        </div>
        <div className="input">
          <label htmlFor="password1">Password </label>
          <input
            type="password"
            id="password1"
            placeholder="Enter your password..."
          />
        </div>
        <div className="input">
          <label htmlFor="password2">Confirm password </label>
          <input
            type="password"
            id="password2"
            placeholder="Confirm your pasword..."
          />
        </div>
        <button>SignIn</button>
      </form>
    </div>
  )
}

export default Register
