import { FaSignInAlt } from "react-icons/fa"
import { useState } from "react"

function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    password1: "",
    password2: "",
  })
  const { name, password1, password2 } = registerData
  const onChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="register">
      <h1>
        <FaSignInAlt /> SignIn
      </h1>
      <form onSubmit={onSubmit}>
        <div className="input">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="input">
          <label htmlFor="password1">Password </label>
          <input
            type="password"
            id="password1"
            placeholder="Enter your password..."
            name="password1"
            value={password1}
            onChange={onChange}
          />
        </div>
        <div className="input">
          <label htmlFor="password2">Confirm password </label>
          <input
            type="password"
            id="password2"
            placeholder="Confirm your pasword..."
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <button type="submit">SignIn</button>
      </form>
    </div>
  )
}

export default Register
