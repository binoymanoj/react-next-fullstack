import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-14 w-14 border-[10px] border-white border-dotted rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
