// Carousel.js
import Slider from 'react-slick';

const Carousel = ({ items, slidesToShow, autoSlide , height , width , dots, displayType , containerwidth, containerpadding, containerfont}) => {
  const settings = {
    dots: dots,
    infinite: true,
    speed: 1500,
    autoplay: autoSlide,
    autoplaySpeed: 3500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.max(1, slidesToShow - 1),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-5 ">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="">
            <div className="bg-white border shadow-md  text-center place-items-center px-10" style={{display:displayType}}>
              <img src={item.image} alt={item.name} className=" object-cover" style={{height:height , width: width}}/>
              <div className='flex-col items-center' style={{width : containerwidth, fontSize : containerfont}}>
              <h3 className="font-normal text-gray-600 text-2xl" style={{padding : containerpadding}}>{item.name}</h3>
              <p className="text-gray-600 text-2xl">{item.price}</p>
              <hr></hr>
              <p className='text-gray-600'>+ Explore</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
