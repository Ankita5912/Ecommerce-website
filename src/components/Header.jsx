import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";


function Header({ searchItem, setSearchItem, counter }) {


  const navitems = [
    {
      name:"Home",
      path:'/'
    },
    {
      name:"Men",
      path:"/Men"
    },
    {
      name:"Women",
      path:"/Women"
    },
    {
      name:"Kids",
      path:"/Kids"
    },
    {
      name:"Home and Living",
      path:"/HandL"
    },
    {
      name:"Beauty",
      path:"/Beauty"
    }
  ]



  const [change ,setChange] = useState(false);


  const handleonChange = () =>{
    setChange(!change);
  };


  const Block = () =>{


    return(
        <div className="grid border bg-white text-black w-1/2 absolute z-50 h-auto" onClick={handleonChange}>
          <div className="flex items-center gap-4 my-4">
          <CiMenuBurger className="mx-1"/>
          <h1 className="text-xl md:text-4xl font-semibold text-center align-middle row-start-2">Ecom</h1>
          </div>
          <div className="grid justify-items-start mx-9 place-items-center">
            {navitems.map((items, index)=>(
              <Link to={items.path} className="text-base font-normal p-2 items-center justify-center" key={index}>{items.name}<hr/></Link>
            ))}
          </div>
        </div>) ;
};



  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  return (
    <>
  {
    change? (<Block/>):
    (<div className="h-[70px] flex justify-between items-center py-5 px-4 sticky top-0 z-50 bg-white w-full shadow-slate-400">
        

      <div className="flex gap-1 items-center">
        <div className="flex items-center lg:hidden justify-center" onClick={handleonChange}>
          <CiMenuBurger />
        </div>
        
        <div className="">
          <h1 className="text-2xl font-semibold md:font-bold cursor-pointer justify-start">ECOM</h1>
        </div>
        </div>
        
        

        <div className="lg:flex gap-6 text-lg hidden">
          <Link to="/" >
            {" "}
            <p className="cursor-pointer">Home</p>
          </Link>
          <Link to="/Men"><p className="cursor-pointer">Men</p></Link>
          <Link to="/Women"><p className="cursor-pointer">Women</p></Link>
          <Link to="/Kids"><p className="cursor-pointer">Kids</p></Link>
          <Link to="/HandL"><p className="cursor-pointer">Home and Living</p></Link>
          <Link to="/Beauty"><p className="cursor-pointer">Beauty</p></Link>

        </div>


        <div className="flex md:gap-4 gap-1 sm:gap-2  items-center justify-end relative">

          <div className="flex gap-1 items-center relative mx-6">
          <CiSearch size={"29px"} className="cursor-pointer px-1 absolute"/>
          <input
            type="search"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Search Products..."
            className="border-1 border-none sm:w-[250px] py-2 text-lg hidden sm:flex px-10"
          />
          
          </div>
          

           
          <Link to="/Login">
            <CgProfile size={"20px"} />
          </Link>
          <Link to="/wishlist">
            <CiHeart size={"24px"} className="cursor-pointer" />
          </Link>
          <Link to="/cart">
            <div className="bg-black h-[20px] text-white text-center w-[20px] rounded-full absolute ml-3 top-4">
              {counter}
            </div>
            <CiShoppingCart size={"24px"} className="cursor-pointer" />
          </Link>
        </div>


      </div>)
    }
      
    </>
  );
}

export default Header;
