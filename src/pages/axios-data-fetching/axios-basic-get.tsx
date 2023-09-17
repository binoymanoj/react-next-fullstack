import { getLayout } from "@/components/layouts/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id?: number;
  name?: string;
  email: string;
}

const AxiosBasicGET = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("res", response.data);
      setUserData(response.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold underline mb-6">Axios Data Fetch</h2>
      <div>
        {userData?.map((v: User, i: any) => (
          <div key={i}>
            <h2 className="font-semibold">Name: {v?.name}</h2>
            <h2>Email: {v?.email}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiosBasicGET;
AxiosBasicGET.getLayout = getLayout;
