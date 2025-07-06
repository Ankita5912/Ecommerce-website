import Carousel from "./CrowselComponent";

function Kids(){
  
  const products = [
    { id: 1, image: 'https://media.istockphoto.com/id/1212178788/photo/young-woman-shopping-in-a-clothing-store.jpg?s=2048x2048&w=is&k=20&c=PyapFQFQQta5gyZ-b1C31qo4lSWHdBXGxoUfGBfFW1A=', name:"Top Brands", price: "Below 999" },
    { id: 2, image: 'https://media.istockphoto.com/id/1212177454/photo/young-woman-shopping-in-a-clothing-store.jpg?s=2048x2048&w=is&k=20&c=mpL1da0dqSIU-77hlLxz9vlSr-ccqJgKskk_HDlj01U=' , name:"Kids Wear", price: "Below 699"},
    { id: 3, image: 'https://media.istockphoto.com/id/1146768065/photo/young-woman-holding-stylish-handbag-and-wearing-trendy-outfit-spring-female-clothes-and.jpg?s=1024x1024&w=is&k=20&c=p2zAp8v8GBHCdFShCu6SSl7x9kyvq96OtlA43fJkV5g=' , name:"Kids Wear", price: "Under 599"},
  ];

  return(
    <>
      <div className="overflow-hidden bg-slate-100" > 
   {/* wrapper */}
    <div className="">
    <Carousel items={products} slidesToShow={1} autoSlide={true} height={400} width={"70%"} dots={false} displayType={"flex"} content={"center"} containerwidth={"30%"} containerpadding={"8px"}  containerfont={"20px"}/>
    </div>

  </div>
    </>
  );
}

export default Kids;