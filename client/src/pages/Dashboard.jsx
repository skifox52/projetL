import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import SingleCat from "../components/SingleCat"
import { reset, getCat } from "../features/cat/catSlice"
import Spinner from "../components/Spinner"
import CatForm from "../components/CatForm"

function Dashboard() {
  const { user } = useSelector((state) => state.auth)
  const { cats, message, isError, isLoading } = useSelector(
    (state) => state.cat
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      console.error(message)
    }
    if (!user) {
      navigate("/login")
    }
    dispatch(getCat())

    return () => {
      dispatch(reset())
    }
  }, [navigate, user, dispatch, isError, message])
  if (isLoading) return <Spinner />
  return (
    <>
      <section className="welcome">
        <h1>
          Bienvenue <span className="username">{user && user.name}</span>
        </h1>
        <h3>
          Nombre de catégories: <span className="number">{cats.length}</span>
        </h3>
      </section>
      <div className="dashboard">
        <CatForm />
        {cats.length > 0 ? (
          <div className="cats">
            {cats.map((cat) => (
              <SingleCat key={cat._id} cat={cat} />
            ))}
          </div>
        ) : (
          <h3 style={{ textAlign: "center", marginTop: "4em" }}>No data!</h3>
        )}
      </div>
    </>
  )
}

export default Dashboard
