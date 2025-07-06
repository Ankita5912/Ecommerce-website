import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import { Link } from "react-router-dom";

// Card Component
function Card({ category }) {
  return (
    <>
      <div className="flex flex-col">
        {/* Use category.thumbnail dynamically */}
        <img
          src={category.thumbnail}
          alt={category.name}
          className="h-52 w-48 border-t-4 border-l-4 border-r-4 border-orange-700"
        />

        {/* Card Content */}
        <div
          className="flex-col text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2"
          style={{
            backgroundImage:
              'url("https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png?fit=1200%2C600&ssl=1")',
          }}
        >
          <div className="text-base font-medium tracking-normal">
            {category.name}
          </div>
          {/* Remove category.discount if it doesn't exist */}
          {category.discount && (
            <div className="text-xl font-bold tracking-wider">
              {category.discount}
            </div>
          )}
          <div className="text-base font-medium tracking-normal">Shop Now</div>
        </div>
      </div>
    </>
  );
}

export { Card };

// ShopByCategory Component
function ShopByCategory({ categories, level = "thirdcategories" }) {
  const { ShowproductList } = useContext(CartContext);

  return (
    <div className="bg-white my-6">
      <div className="flex justify-between items-center py-5">
        <h1 className="bg-white font-semibold md:font-bold text-2xl md:text-3xl text-zinc-600 py-10 align-middle mt-6 mb-2  tracking-widest px-14 uppercase">
          Shop by Category
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 px-10 pb-6 justify-center">
        {/* Iterate through categories and subcategories */}
        {/* Iterate through categories and subcategories */}
        {categories.map((category) => {
          // Handle subcategories rendering
          if (level === "subcategories") {
            return category.subcategories.map((subcategory) => (
              <Link
                to="/ShowProduct"
                key={subcategory.id}
                onClick={() =>
                  ShowproductList({ subcategoryId: subcategory.id })
                }
              >
                <Card category={subcategory} />
              </Link>
            ));
          }
          // Handle thirdcategories rendering
          else if (level === "thirdcategory") {
            return category.subcategories.map((subcategory) =>
              subcategory.thirdcategories.map((thirdcategory) => (
                <Link
                  to="/ShowProduct"
                  key={thirdcategory.id}
                  onClick={() =>
                    ShowproductList({
                      subcategoryId: subcategory.id,
                      thirdcategoryId: thirdcategory.id,
                    })
                  }
                >
                  <Card category={thirdcategory} />
                </Link>
              ))
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ShopByCategory;
