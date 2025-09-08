import { useCartStore } from "../../store/cartStore";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const TABLE_CELL_STYLES = "border border-gray-200 p-3 text-start";

const BUTTON_STYLES = {
  primary: "p-2 bg-[#064490] text-white rounded-full hover:bg-[#052f6e] transition duration-300 shadow-md hover:shadow-lg",
  danger: "p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 shadow-md hover:shadow-lg",
};

const MyCart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice } = useCartStore();

  const navigate = useNavigate();

  const handleGoBack = () =>{
    navigate(-1)
  }

  return (
    <div className="py-12 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b border-gray-200 pb-4">Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center p-12 bg-gray-50 rounded-xl border border-gray-200 shadow-lg">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <RiDeleteBin5Line className="text-4xl text-gray-400" />
            </div>
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <p className="text-gray-500">Looks like you haven't added any items to your cart yet.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
              <table className="border-collapse w-full bg-white">
                <thead>
                  <tr className="bg-[#064490] text-white">                    
                    <th className={TABLE_CELL_STYLES}>SL</th>
                    <th className={TABLE_CELL_STYLES}>Image</th>
                    <th className={TABLE_CELL_STYLES}>Product</th>
                    <th className={TABLE_CELL_STYLES}>Price</th>
                    <th className={TABLE_CELL_STYLES}>Quantity</th>
                    <th className={TABLE_CELL_STYLES}>Total</th>
                    <th className={`${TABLE_CELL_STYLES} rounded-tr-xl`}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition duration-300">
                      <td className={TABLE_CELL_STYLES}>
                        <span className="text-sm text-black font-medium">{idx+ 1}</span>
                      </td>
                      <td className={TABLE_CELL_STYLES}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg shadow-md"
                        />
                      </td>
                      <td className={TABLE_CELL_STYLES}>
                        <h3 className="text-sm font-semibold text-black">{item.name}</h3>
                      </td>
                      <td className={TABLE_CELL_STYLES}>
                        <span className="text-sm text-black font-medium">Tk. {item.price}</span>
                      </td>
                      <td className={TABLE_CELL_STYLES}>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className={BUTTON_STYLES.primary}
                            aria-label="Decrease quantity"
                          >
                            <FaMinus size={14} />
                          </button>
                          <span className="w-8 text-sm font-semibold text-center text-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className={BUTTON_STYLES.primary}
                            aria-label="Increase quantity"
                          >
                            <FaPlus size={14} />
                          </button>
                        </div>
                      </td>
                      <td className={TABLE_CELL_STYLES}>
                        <span className="text-sm text-black font-medium">Tk. {item.price * item.quantity}</span>
                      </td>
                      <td className={TABLE_CELL_STYLES}>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className={BUTTON_STYLES.danger}
                          aria-label="Remove item"
                        >
                          <RiDeleteBin5Line size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td colSpan={6} className={`${TABLE_CELL_STYLES} text-right text-xl font-bold text-gray-800`}>
                      Cart Total:
                    </td>
                    <td colSpan={2} className={`${TABLE_CELL_STYLES} text-xl font-bold text-[#064490]`}>
                      Tk. {totalPrice}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-8 flex justify-end gap-4">
                <button
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300 font-medium"
                  aria-label="Continue shopping"
                  onClick={handleGoBack}
                >
                  Continue Shopping
                </button>
              <button
                className="px-8 py-3 bg-[#064490] text-white rounded-lg hover:bg-[#052f6e] transition duration-300 font-medium shadow-md hover:shadow-lg"
                aria-label="Proceed to checkout"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyCart;
