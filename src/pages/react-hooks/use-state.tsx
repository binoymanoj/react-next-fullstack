import React, { useState } from "react";

const Usestate = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const [inputValue, setInputValue] = useState("Random");

  const onchange = (e: any) => {
    let newVal = e.target.value;
    setInputValue(newVal);
  };

  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {/* useState Hook */}
      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className="text-center text-2xl font-semibold mt-4 underline">
          useState Hook
        </h2>

        {/* useState example 1 */}
        <div className="flex items-center text-2xl gap-8">
          <button
            onClick={decrement}
            className="px-8 py-1 rounded-lg w-fit bg-black hover:bg-black/80 text-white text-xl font-semibold"
          >
            -
          </button>
          {counter}
          <button
            onClick={increment}
            className="px-8 py-1 rounded-lg w-fit bg-black hover:bg-black/80 text-white text-xl font-semibold"
          >
            +
          </button>
        </div>

        {/* useState example 2 */}
        <div className="flex flex-col gap-3">
          <input
            onChange={onchange}
            type="text"
            placeholder="Type here to change...."
            className="border border-sky-500 p-1 text-black rounded-md px-2"
          />
          {inputValue}
        </div>

        {/* useState example 3 */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-2xl font-bold ">{count}</h1>
          <button
            onClick={() => {
              setCount(count + 1);
              setShowText(!showText);
            }}
            className="bg-black py-1 px-3 text-white rounded-lg text-lg font-semibold"
          >
            Click to change
          </button>
          {showText && (
            <p className="text-lg font-semibold pt-2">This is a Text</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Usestate;
