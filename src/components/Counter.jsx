import { useState } from "react"; // Add this import
import { TiMinus, TiPlus } from "react-icons/ti";

function Counter({ initialPrice, onPriceChange }){
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(initialPrice);

  // Increment the count and update the price
  const increment = () => {
    let newCount = count + 1;
    setCount(newCount);
    const newPrice = newCount * initialPrice;
    setPrice(newPrice);
    onPriceChange(newPrice); // Notify parent component about price change
  };

  // Decrement the count and update the price (prevent count from going below 1)
  const decrement = () => {
    if (count > 1) {
      let newCount = count - 1;
      setCount(newCount);
      const newPrice = newCount * initialPrice;
      setPrice(newPrice);
      onPriceChange(newPrice); // Notify parent component about price change
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-5 border border-black w-[100px]">
        <button onClick={decrement} className="">
          <TiMinus />
        </button>
        <span className="">{count}</span>
        <button onClick={increment} className="">
          <TiPlus />
        </button>
      </div>
    </>
  );
}

export default Counter;
