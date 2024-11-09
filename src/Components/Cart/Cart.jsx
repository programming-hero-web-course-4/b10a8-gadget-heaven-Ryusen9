import PropTypes from "prop-types";
import { LiaSortNumericDownSolid } from "react-icons/lia";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ToastContainer, Bounce } from "react-toastify";
const Cart = ({ carts, handleDelete, sortPrice }) => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="font-sora">
        <div className="w-[80%] flex mx-auto justify-between items-center my-4">
          <p className="text-xl font-medium md:text-xl">Cart</p>
          <div className="flex gap-3">
            <button
              className="btn bg-transparent border-purple-400 text-purple-400 hover:bg-transparent hover:border-purple-400 rounded-2xl"
              onClick={sortPrice}
            >
              {" "}
              Sort by Price <LiaSortNumericDownSolid />{" "}
            </button>
            <button className="btn rounded-2xl bg-gradient-to-t from-purple-500 to-purple-300">
              Purchase
            </button>
          </div>
        </div>
        {carts.map((item) => (
          <div
            className="border-2 rounded-xl p-2 w-[90%] gap-3 mx-auto flex justify-between items-center mb-4"
            key={item.product_id}
          >
            <div className="flex gap-4">
              <div className="w-32 rounded-xl overflow-hidden">
                <img
                  src={item.product_image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-lg font-medium">{item.product_title}</p>
                <p className="text-sm">Price: ${item.price}</p>
              </div>
            </div>
            <div className="h-full flex items-center justify-center">
              <button
                className="btn text-lg bg-rose-500 text-zinc-200 hover:bg-rose-400 "
                onClick={() => handleDelete(item)}
              >
                <RiDeleteBin5Line />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
Cart.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.object),
  handleDelete: PropTypes.func,
  sortPrice: PropTypes.func,
};
export default Cart;
