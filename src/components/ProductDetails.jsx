import { CiHeart } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";
import { useContext } from "react";

function ProductDetail({ products }) {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }
  
  const {addToCart} = useContext(CartContext);
  const {addToWishlist} = useContext(CartContext)

  const {
    images,
    dimensions = [],
    description,
    title,
    category,
    price,
    discountPercentage,
  } = product;

  return (
    <>
      <div className="flex flex-row justify-center gap-8 my-16 mx-10 items-start overflow-hidden">
        <div className="flex flex-wrap gap-2 justify-start w-1/2 max-w-full flex-shrink-0">
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              alt={`Product Image ${index + 1}`}
              className="h-96 w-[48%] border rounded-sm flex-shrink-0"
            />
          ))}
        </div>

        <div className="grid mr-8 w-1/2">
          <h1 className="text-2xl font-bold mb-2 mt-0">{title}</h1>
          <div className="text-xl font-normal subpixel-antialiased text-gray-600">
            {category}
          </div>
          <hr className="mt-5" />
          <div className="text-xl font-bold mt-5 mb-0">${parseInt(price)}</div>
          <div className="text-green-700 font-semibold mt-0">
            {discountPercentage}% off
          </div>

          <div className="my-4">
            <div className="font-semibold text-1xl">SELECT SIZE (UK Size)</div>
            <div className="flex gap-2">
              {dimensions.length > 0 ? (
                dimensions.map((size, index) => (
                  <span
                    key={index}
                    className="w-[45px] h-[45px] border text-center py-2 my-4 mx-1 rounded-full"
                  >
                    {size}
                  </span>
                ))
              ) : (
                <div>No sizes available</div>
              )}
            </div>
          </div>

          <div className="buttons flex gap-4 mb-5 mt-3">
            <button className="bg-slate-800 w-60 h-12 text-white rounded-md" onClick={()=> addToCart(product)}>
              ADD TO BAG
            </button>
            <button className="flex gap-1 w-48 h-12 justify-center border items-center rounded-md" onClick={()=>addToWishlist(product)}>
              <CiHeart className="my-1" />
              WISHLIST
            </button>
          </div>

          <div>
            <div className="text-1xl font-semibold my-3">Product Details</div>
            {description}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;