import { FaUser } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Login() {
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
    dispatch(login(loginData))
  }
  if (isLoading) {
    return <Spinner />
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
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
