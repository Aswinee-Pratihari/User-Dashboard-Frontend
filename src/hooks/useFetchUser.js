import React, { useEffect, useState } from "react";

const useFetchUser = () => {
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
  }, []);
  return data;
};

export default useFetchUser;
