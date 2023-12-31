import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserState";

const useFetchUser = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [user]);
  return data;
};

export default useFetchUser;
