import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserState";
import { QueryContext } from "../context/QueryState";

const useFetchUser = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const { query, setQuery } = useContext(QueryContext);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:3000/users?q=${query}`);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [user, query]);
  return data;
};

export default useFetchUser;
