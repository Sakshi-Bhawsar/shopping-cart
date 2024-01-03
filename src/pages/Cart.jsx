import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="container mx-auto ">
      {
        cart.length > 0 ?
          (<div className=" flex justify-center space-x-4">


            <div className="flex-1">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="flex flex-col     mt-20    h-64 w-72 border rounded-lg shadow-lg">

              <div>
                <div className="text-2xl font-semibold m-4">Your Cart:</div>
                <div className="text-xl font-semibold m-2">Summary</div>
                <p className="text-gray-700 m-2">
                  <span className="font-semibold text-xl">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="text-xl font-bold m-2">
                <p>Total Amount: ${totalAmount}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md m-2">
                  CheckOut Now
                </button>
              </div>

            </div>


          </div>) :
          (<div className="grid  place-content-center h-screen">
            <h1 className=" text-xl m-4">Cart Empty</h1>
            <Link to={"/"}>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-2xl">
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;
