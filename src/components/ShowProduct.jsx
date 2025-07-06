import { CiHeart } from "react-icons/ci";
import { CartContext } from "../context/Cartcontext";
import { useContext } from "react";


//here product is an prop passing to product card so that when map function is applied it renders the product function
function ProductCard({products}){

  const { addToCart, addToWishlist } = useContext(CartContext);

  const notify = () =>
    toast.success("Added to Cart!", {
      theme: "dark",
    });

  const notifyWishlist = () =>
    toast.info("Added to wishlist!", {
      theme: "dark",
    });

  return(
  <>
  <div className="relative max-w-sm  bg-white  hover:shadow-slate-500 shadow-lg overflow-hidden group h-80 w-64">
  {/* Image that covers the background and shrinks on hover */}
  <div className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:h-2/3">
    <img
      className="w-full h-full object-cover transition-all duration-300 ease-in-out"
      src="https://via.placeholder.com/400"
      alt="Product"                
    />                
  </div>

  {/* Content section with Price, Add to Cart button, and Wishlist icon */}
  <div className="relative z-10 p-4 h-full flex flex-col justify-end items-center">
    {/* Product Price (always visible at the bottom) */}
    <p className="text-xl font-bold text-gray-900 mb-2">Price : ₹{products.price}</p>
                                                 
    {/* Add to Cart Button and Wishlist Icon (appear on hover) */}
    <div className=" space-x-4 hidden group-hover:flex  group-hover:gap-6 transition-all duration-300">
      {/* Add to Cart Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded transition-all duration-300" 
      onClick={() => {notify(), addToCart(products)}}>
        Add to Cart
      </button>

      {/* Wishlist Icon (Heart Icon) */}
      <button className="text-gray-600 hover:text-red-500 transition-all duration-300" onClick={()=>{notifyWishlist(),
        addToWishlist(products)
      }}>
      <CiHeart size={"24px"} className="cursor-pointer" />
      </button>
    </div>
  </div>
  </div>

  </>
  );
}

export {ProductCard};

function ShowProduct(){
  const { productList } = useContext(CartContext);
  
 

  return(
    <>
      <div className="flex  flex-wrap justify-start items-center m-10 gap-6">
        {/* Add a check to ensure productList is not empty */}
        {productList && productList.length > 0 ? (
          productList.map((product) => (
            <ProductCard products={product} key={product.id} />
          ))
        ) : (
          <p>No products available</p> // Fallback message if product list is empty
        )}
      </div>
    </>
  );
}

export default ShowProduct ;





