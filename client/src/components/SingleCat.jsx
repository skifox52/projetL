import { FaTrash } from "react-icons/fa"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import { useDispatch } from "react-redux"
import { deleteCat } from "../features/cat/catSlice"

function SingleCat({ cat }) {
  const dispatch = useDispatch()
  const onDelete = () => {
    confirmAlert({
      title: "Supprimer une catégorie",
      message: "Confirmer la suppression?",
      buttons: [
        {
          label: "Oui",
          onClick: () => dispatch(deleteCat(cat._id)),
        },
        {
          label: "Non",
          onClick: () => {
            return
          },
        },
      ],
    })
  }

  return (
    <div className="single-cat-container">
      <section className="single-cat">
        <h1>{cat.name}</h1>
        <h3>
          {cat.amount} <span>DZD</span>
        </h3>
        <p>{new Date(cat.date).toLocaleString("fr-FR")}</p>
      </section>
      <button className="trash" onClick={onDelete}>
        <FaTrash />
      </button>
    </div>
  )
}

export default SingleCat
