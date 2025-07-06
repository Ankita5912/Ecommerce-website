import Carousel from "./CrowselComponent";
import ShopByCategory from "./ShopByCategory";
import data from "../data";

function Men(){
  
  const products = [
    { id: 1, image: 'https://www.shutterstock.com/shutterstock/photos/2423355971/display_1500/stock-photo-happy-middle-aged-man-using-digital-tablet-relaxing-on-couch-at-home-mature-male-user-holding-tab-2423355971.jpg' },
    { id: 2, image: 'https://images.unsplash.com/photo-1544658030-d0e5163c47f5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNob2V8ZW58MHx8MHx8fDA%3D' },
    { id: 3, image: 'https://img.freepik.com/premium-photo/flat-lay-men-fashion-casual-outfits-with-accessories-gray-background_1207718-134335.jpg?w=1060' },
  ];
  
  const menCategory = data.categories.filter((category) => category.name === "Men");

  return(
  <div className="overflow-hidden bg-slate-100" > 
   {/* wrapper */}
    <div className="">
    <Carousel items={products} slidesToShow={1} autoSlide={true} height={400} width={"100%"} dots={true}/>
    </div>

    
    <ShopByCategory categories={menCategory} level="thirdcategory" />
    
  </div>
  );
}

export default Men;