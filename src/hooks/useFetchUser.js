import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserState";
import { QueryContext } from "../context/QueryState";
import { ContactContext } from "../context/ContactState";

const useFetchUser = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const { query, setQuery } = useContext(QueryContext);
  const { getAllContacts } = useContext(ContactContext);
  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        const res = await getAllContacts(query);
        console.log(res);
        setData(res);
      }, 1000);
    })();
  }, [user, query]);
  return data;
};

export default useFetchUser;
