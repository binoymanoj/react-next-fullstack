import Button from "@/components/common/button";
import { getLayout } from "@/components/layouts/layout";
import axios from "axios";
import React, { useState } from "react";

function AxiosBasicPOST() {
  const data = { fname: "", lname: "" };
  const [inputData, setInputData] = useState(data);
  console.log("daat", inputData);

  const handleChange = (e: any) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)
    .then((response) => {
        console.log("response", response)
    })
  }
  return (
    <div>
      <h2 className="text-3xl font-semibold underline mb-6">
        Axios Data Fetch
      </h2>
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 items-center">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="fname"
            value={inputData.fname}
            onChange={handleChange}
            className="text-black py-1 px-3 rounded-lg"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lname"
            value={inputData.lname}
            onChange={handleChange}
            className="text-black py-1 px-3 rounded-lg"
          />
        </div>
        <div onClick={handleSubmit}>
          <Button text={"Submit"} />
        </div>
      </div>
    </div>
  );
}

export default AxiosBasicPOST;
AxiosBasicPOST.getLayout = getLayout;
