import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeWishlist
} from "../features/wishlistSlice";

function Wishlist() {

  const dispatch = useDispatch();

  const wishlist = useSelector(
    state => state.wishlist
  );

  return (

    <div className="wishlist-container">

      <h1 className="page-title">
        My Wishlist
      </h1>

      {
        wishlist.length === 0 ? (

          <div className="empty-wishlist">

            <h2>
              No Wishlist Products
            </h2>

            <p>
              Add products from the
              Products page.
            </p>

          </div>

        ) : (

          <div className="wishlist-grid">

            {
              wishlist.map(product => (

                <div
                  key={product.id}
                  className="wishlist-card"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="wishlist-content">

                    <h2>
                      {product.name}
                    </h2>

                    <p>
                      🏷 {product.brand}
                    </p>

                    <p>
                      ⭐ {product.rating}
                    </p>

                    <p>
                      💰 ₹{product.price}
                    </p>

                    <button
                      onClick={() =>
                        dispatch(
                          removeWishlist(
                            product.id
                          )
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );
}

export default Wishlist;
