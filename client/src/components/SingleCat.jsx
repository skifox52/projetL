import { FaTrash } from "react-icons/fa"

function SingleCat({ cat }) {
  return (
    <div className="single-cat-container">
      <section className="single-cat">
        <h1>{cat.name}</h1>
        <h3>
          {cat.amount} <span>DZD</span>
        </h3>
        <p>{new Date(cat.date).toLocaleString("fr-FR")}</p>
      </section>
      <button className="trash">
        <FaTrash />
      </button>
    </div>
  )
}

export default SingleCat
