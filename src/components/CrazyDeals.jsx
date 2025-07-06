import { useState } from "react";
import data from "../data";

function CrazyDeals() {
  // State to manage the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dealcard.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dealcard.length - 1 : prevIndex - 1
    );
  };


  const dealcard = [
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUOCRQe5HYmMRyCQBXG0erQIuPF-TWACFKg&s",
      Heading:"Cruelity-free personal care",
      discount:"buy 1, get 1 Free",
      Brand:""
    },
    {
      img:"https://brownliving.in/cdn/shop/products/dark-blue-ajrakh-printed-cotton-shirt-verified-sustainable-mens-shirt-on-brown-living-422525_600x.jpg?v=1703916409",
      Heading:"cruelity free personal care",
      discount:"MIN 80% OFF",
      Brand:""
    },
    {
      img:"https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2023/06/24/dsc00208e.jpg",
      Heading:"cruelity free personal care",
      discount:"MIN 75% OFF",
      Brand:""
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUOCRQe5HYmMRyCQBXG0erQIuPF-TWACFKg&s",
      Heading:"cruelity free personal care",
      discount:"MIN 60% OFF",
      Brand:""
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUOCRQe5HYmMRyCQBXG0erQIuPF-TWACFKg&s",
      Heading:"cruelity free personal care",
      discount:"MIN 60% OFF"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUOCRQe5HYmMRyCQBXG0erQIuPF-TWACFKg&s",
      Heading:"cruelity free personal care",
      discount:"MIN 55% OFF"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUOCRQe5HYmMRyCQBXG0erQIuPF-TWACFKg&s",
      Heading:"cruelity free personal care",
      discount:"MIN 50% OFF"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUOCRQe5HYmMRyCQBXG0erQIuPF-TWACFKg&s",
      Heading:"cruelity free personal care",
      discount:"MIN 40% OFF"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUOCRQe5HYmMRyCQBXG0erQIuPF-TWACFKg&s",
      Heading:"cruelity free personal care",
      discount:"MIN 45% OFF"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUOCRQe5HYmMRyCQBXG0erQIuPF-TWACFKg&s",
      Heading:"cruelity free personal care",
      discount:"MIN 30% OFF"
    }
  ];

  return (
  
        <div className="grid bg-white overflow-hidden h-auto w-full mt-5">
          <h1 className="bg-white font-semibold md:font-bold text-2xl md:text-3xl text-zinc-600 py-10 align-middle mt-6 mb-2  tracking-widest px-14 uppercase">
          Medal Worthy Brands To Bag
          </h1>


          {/* cards are wrapped here */}

          <div className="relative w-full flex justify-center items-center">

          
            <div className="flex flex-row align-middle my-5  w-full h-72 transition-transform duration-500"
             style={{
              transform: `translateX(-${currentIndex * (100 / dealcard.length)}%)`,
              width: `${dealcard.length * 100}%`, // Set container width based on number of cards
            }}>


              {/* single card starts from here */}

              {dealcard.map((card , indx) => (
              <div className="h-80 w-56 flex-shrink-0 rounded-sm flex flex-col gap-1" 
              
              style={{ width: "calc(100% / 6)" }} // Show 6 cards at a time key={indx} 
              key={indx}>
                <img src={card.img} alt={card.Heading} className="h-52 w-full"></img>  
                <div className="mx-2 md:text-lg font-normal text-sm  tracking-tighte">{card.name}</div>
                <div className=" mx-2 font-extrabold text-teal-950 md:text-base text-sm uppercase tracking-tighter">{card.discount}</div>
              </div>
              ))}  
          
            </div>
      
      
            


          </div>

          <div className="flex items-center gap-5 w-full h-7 mt-2 mb-14 text-black  justify-center ">

              {/* Previous Button */}
              <div className="h-fit w-fit "><button
              className="absolute align-middle p-0 text-black  rounded-full"
              onClick={prevSlide}
              >
                ○
              </button></div>

              {/* Next Button */}
              <div className="h-fit w-fit">
              <button 
              className="absolute align-middle  text-black  rounded-full"
              onClick={nextSlide}
              >
              ○
              </button></div>  


            </div>

        
        </div>
  );
}

export default CrazyDeals;
