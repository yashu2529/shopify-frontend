import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  addWishlist
} from "../features/wishlistSlice";

function ProductCard({
  product,
  onDelete
}) {

  const dispatch = useDispatch();

  function handleWishlist() {

    dispatch(
      addWishlist(product)
    );

  }

  return (

    <div className="card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>{product.brand}</p>

      <p>₹ {product.price}</p>

      <div className="card-actions">
        <Link
          className="view-btn"
          to={`/products/${product.id}`}
        >
          View
        </Link>

        <Link
          className="edit-btn"
          to={`/edit-product/${product.id}`}
        >
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </div>

      <button
        className="wishlist-btn"
        onClick={handleWishlist}
      >
        ❤ Add To Wishlist
      </button>

    </div>

  );
}

export default ProductCard;