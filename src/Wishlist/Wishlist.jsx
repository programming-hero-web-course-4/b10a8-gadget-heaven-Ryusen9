import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";
const Wishlist = ({ wishlists, handleCart, handleDelete }) => {
  return (
    <div className="font-sora">
      {wishlists.map((wishlist) => (
        <div className="border-2 w-[90%] mx-auto p-2" key={wishlist.id}>
          <div className="flex gap-3">
            <div className="w-28 rounded-lg overflow-hidden">
              <img
                src={wishlist.product_image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">{wishlist.product_title}</p>
              <p>Price : ${wishlist.price}</p>
              <p className="pr-1">{wishlist.description}</p>
              <div>
                <button
                  disabled={!wishlist.availability}
                  className="btn"
                  onClick={() => handleCart(wishlist)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <button onClick={() => handleDelete(wishlist)} className="btn btn-circle btn-sm text-xl bg-rose-500 hover:bg-rose-400 text-zinc-200"> <IoCloseOutline /> </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Wishlist.propTypes = {
  wishlists: PropTypes.array,
  handleCart: PropTypes.func,
};

export default Wishlist;
