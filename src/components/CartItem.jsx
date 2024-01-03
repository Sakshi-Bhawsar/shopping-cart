
import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex m-6 border shadow-md bg-white rounded-lg items-center space-x-4 p-4 	">

        <div>
          <img src={item.image} className=" w-64 h-32 object-fill rounded  " />
        </div>
        <div>
          <h1 className="font-bold text-2xl m-4">{item.title}</h1>
          <h1 className='text-gray-600 ml-4'>{item.description}</h1>
          <div className="  flex items-center mt-2 ml-4">
            <p className="text-xl text-slate-500 font-semibold mr-4">{item.price}</p>
            <div
              onClick={removeFromCart} className="cursor-pointer text-red-500">
              <FcDeleteDatabase size={30} />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;


