import ShopByCategory from "./ShopByCategory";
import Carousel from "./CrowselComponent";
import data from "../data";

function Women(){
  const products = [
    { id: 1, image: 'https://media.istockphoto.com/id/1212178788/photo/young-woman-shopping-in-a-clothing-store.jpg?s=2048x2048&w=is&k=20&c=PyapFQFQQta5gyZ-b1C31qo4lSWHdBXGxoUfGBfFW1A=' },
    { id: 2, image: 'https://media.istockphoto.com/id/1212177454/photo/young-woman-shopping-in-a-clothing-store.jpg?s=2048x2048&w=is&k=20&c=mpL1da0dqSIU-77hlLxz9vlSr-ccqJgKskk_HDlj01U=' },
    { id: 3, image: 'https://media.istockphoto.com/id/1146768065/photo/young-woman-holding-stylish-handbag-and-wearing-trendy-outfit-spring-female-clothes-and.jpg?s=1024x1024&w=is&k=20&c=p2zAp8v8GBHCdFShCu6SSl7x9kyvq96OtlA43fJkV5g=' },
  ];
  
  const womenCategory = data.categories.filter((category) => category.name === "Women");

  return(
  <div className="overflow-hidden bg-slate-100" > 
   {/* wrapper */}
    <div className="">
    <Carousel items={products} slidesToShow={1} autoSlide={true} height={400} width={"100%"} dots={true}/>
    </div>

    
    <ShopByCategory categories={womenCategory} level="thirdcategory" />
    
  </div>
  );
}

export default Women;