import { useState, useEffect } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { createCat } from "../features/cat/catSlice"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

function CatForm() {
  const { isError, message } = useSelector((state) => state.cat)

  useEffect(() => {
    if (isError) {
      console.error(message)
    }
  }, [isError, message])
  const dispatch = useDispatch()
  const [inputData, setInputData] = useState({
    name: "",
    amount: "",
  })
  const { name, amount } = inputData
  const [FormShow, setFormShow] = useState(false)
  const [isClosed, setIsClosed] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!name || !amount) {
      toast.error("Veuillez remplir vos champs!")
      return
    }
    dispatch(createCat({ name: name.toString(), amount: parseInt(amount) }))
  }
  const onChange = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }))
  }
  const showForm = (e) => {
    setFormShow(!FormShow)
    setIsClosed(!isClosed)
  }

  return (
    <>
      {isClosed ? (
        <button className="show-form" onClick={showForm}>
          Ajouter une catégorie <FaChevronDown />
        </button>
      ) : (
        <button className="show-form" onClick={showForm}>
          Cacher le formulaire <FaChevronUp />
        </button>
      )}

      {FormShow && (
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nom de catégorie..."
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Montant</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Entrer un montant..."
              value={amount}
              onChange={onChange}
            />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      )}
    </>
  )
}

export default CatForm
