import { FaUser } from "react-icons/fa"
import { useState } from "react"

function Login() {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  })
  const { name, password } = loginData
  const onChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="login">
      <h1>
        <FaUser /> Login
      </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={onChange}
          name="name"
          placeholder="Name..."
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
          placeholder="Password..."
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
