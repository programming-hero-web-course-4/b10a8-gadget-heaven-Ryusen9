import PropTypes from "prop-types";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function ProductInfo({ product, handleCart, handleWishlist }) {
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
      <div className="relative h-screen font-sora mb-32">
        <div className="bg-gradient-to-t flex flex-col text-center gap-3 pt-[120px] from-purple-500 to-purple-400 h-[40vh]">
          <p className="text-2xl md:text-4xl text-center font-bold">
            Product Details
          </p>
          <p className="px-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="absolute top-[70%] md:top-[60%] backdrop-blur-md left-1/2 translate-x-[-50%] translate-y-[-50%] border-2 w-[90%] mx-auto mb-5 grid grid-cols-1 md:grid-cols-2 p-4 rounded-xl font-sora gap-4">
          <div className="lg:h-[45vh] flex items-center justify-center">
            <img
              src={product.product_image}
              alt=""
              className="rounded-lg object-cover h-[15vh] w-full lg:h-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold">{product.product_title}</p>
            <p className="text-lg">
              Price: <span>{product.price}$</span>
            </p>
            {product.availability === true ? (
              <div className="border w-[25%] text-center p-2 rounded-3xl border-green-500 bg-green-300/75 text-zinc-100">
                In Stock
              </div>
            ) : (
              <div className="border w-[35%] text-center p-2 rounded-3xl border-red-500 bg-red-300 text-zinc-100">
                Out of Stock
              </div>
            )}
            <p>{product.description}</p>
            <div>
              <p className="font-medium">Specifications:</p>
              <ul>
                {Array.isArray(product.Specification) &&
                product.Specification.length > 0 ? (
                  product.Specification.map((specification, index) => (
                    <li key={index} className="list-inside list-disc">
                      {specification}
                    </li>
                  ))
                ) : (
                  <li>No specifications available.</li>
                )}
              </ul>
            </div>
            <div>
              <p>Rating: </p>
              <div className="flex items-center gap-7">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
                <div className="flex items-center justify-center bg-yellow-300 px-2 text-zinc-800 py-1 rounded-xl">
                  {product.rating}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-7 my-4">
              <Link>
                <button
                  onClick={() => handleCart(product)}
                  disabled={!product.availability}
                  className={`btn ${!product.availability ? "opacity-50" : ""}`}
                >
                  Add to Cart <MdOutlineShoppingCart />{" "}
                </button>
              </Link>
              <Link>
                <button
                  className="btn btn-circle text-xl"
                  onClick={() => handleWishlist(product)}
                >
                  {" "}
                  <IoMdHeartEmpty />{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
ProductInfo.propTypes = {
  product: PropTypes.object,
  handleCart: PropTypes.func,
  handleWishlist: PropTypes.func,
};
export default ProductInfo;
