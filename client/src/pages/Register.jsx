import { FaSignInAlt } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { register, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    password: "",
    password2: "",
  })
  const { name, password, password2 } = registerData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate("/")
    }
    dispatch(reset())
  }, [user, isSuccess, isError, message, dispatch, navigate])

  const onChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error("Password do not match")
    } else {
      const userData = { name, password }
      dispatch(register(userData))
    }
  }
  if (isLoading) {
    return <Spinner />
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
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password..."
            name="password"
            value={password}
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
