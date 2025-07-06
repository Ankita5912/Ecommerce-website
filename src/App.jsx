import { useEffect, useState } from "react";
import Header from "./components/Header";
import AllCard from "./components/AllCard";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetail from "./components/ProductDetails";
import Footer from "./components/Footer";
import ShowProduct from "./components/ShowProduct";
import Men from "./components/Men";
import Kids from "./components/Kids";
import Women from "./components/Women";
import HomeandLiving from "./components/HandL";
import Beauty from "./components/Beauty";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





function App() {
  const [searchItem, setSearchItem] = useState("");
  const [products, setProducts] = useState([]);

    
  const [countCartItems, setCountCartItems] = useState(0);
  const cartItemsCount = () => {
    setCountCartItems(countCartItems + 1);
  };

  async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  

  return (
    <Router>
      <div className="App bg-white">
       
        
        <Header
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          counter={countCartItems}
        />
        <div className="cursor-pointer">
          <Routes>
            <Route
              path="/"
              element={
                <AllCard
                  products={products}
                  searchItem={searchItem}
                  cartItemsCount={cartItemsCount}
                />
              }
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route
              path="/products/:productId"
              element={<ProductDetail products={products} />}
            />
             <Route path="/ShowProduct" element={<ShowProduct/>} />
             <Route path="/Men" element={<Men/>}/>
             <Route path="/Women" element={<Women/>}/>
             <Route path="/Kids" element={<Kids/>}/>
             <Route path="/HandL" element={<HomeandLiving/>}/>
             <Route path="/Beauty" element={<Beauty />} />

             
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
