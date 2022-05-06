import { useState, useEffect } from "react"
import {
  FaChevronDown,
  FaChevronUp,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"

function InputForm() {
  const { isError, message, cats } = useSelector((state) => state.cat)

  useEffect(() => {
    if (isError) {
      console.error(message)
    }
  }, [isError, message])
  //   const dispatch = useDispatch()
  const [amount, setAmount] = useState()
  const [FormShow, setFormShow] = useState(false)
  const [isClosed, setIsClosed] = useState(true)
  const [detail, setDetail] = useState(false)
  const [addAmount, setAddAmount] = useState({})

  const onChange = (e) => {
    setAddAmount((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setDetail(true)
  }
  const showForm = (e) => {
    setFormShow(!FormShow)
    setIsClosed(!isClosed)
  }
  const closeDetails = (e) => {
    setDetail(false)
  }
  const submitDetails = (e) => {
    e.preventDefault()
  }
  const sumAmount = Object.values(addAmount).reduce(
    (a, b) => parseInt(a) + parseInt(b),
    0
  )

  return (
    <>
      {detail && (
        <div className="detail-container">
          <FaRegArrowAltCircleLeft className="close" onClick={closeDetails} />
          {cats.length > 0 ? (
            <div className="details">
              <div className="amount">
                <h1>
                  {parseInt(amount) - sumAmount} <span>DZD</span>
                </h1>
              </div>
              <form onSubmit={submitDetails}>
                {cats.map((cat, index) => (
                  <>
                    <h4 key={cat._id}>{cat.name}</h4>
                    <input
                      type="number"
                      name={cat.name}
                      id="amount"
                      value={addAmount[cat.name]}
                      key={index}
                      placeholder="Entrer un montant..."
                      onChange={onChange}
                    />
                  </>
                ))}
                <button type="submit">submit</button>
              </form>
            </div>
          ) : (
            <h1>No catégories!</h1>
          )}
        </div>
      )}
      {isClosed ? (
        <button className="show-form" onClick={showForm}>
          Ajouter un montant <FaChevronDown />
        </button>
      ) : (
        <button className="show-form" onClick={showForm}>
          Cacher le formulaire <FaChevronUp />
        </button>
      )}

      {FormShow && (
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="amount">Montant</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Entrer un montant..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      )}
    </>
  )
}

export default InputForm
