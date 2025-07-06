import CrazyDeals from "./CrazyDeals";


function Homepage() {
  return (
    <>
    <div className="relative sm:h-screen h-96">
      <video
        className="w-full h-full absolute object-cover"
        src="/ShoppingVideo.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div
        className="absolute top-0 left-0 w-full sm:h-full h-96 flex justify-center items-center flex-col gap-4"
        style={{ backdropFilter: "blur(3px)" }}
      >
        <h1 className="md:text-5xl sm:text-4xl text-2xl text- justify-center text-white font-bold font-serif  lg:text-7xl">
          Welcome to the ECOM
        </h1>
        <p className="text-white text-xl md:text-3xl lg:text-4xl justify-center">
          Elevate Your Shopping Experience
        </p>
      </div>
    </div>
    </>
  );
}

export default Homepage;
