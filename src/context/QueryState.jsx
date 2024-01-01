import { createContext, useState } from "react";

export const QueryContext = createContext(null);

export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("LastInserted");
  return (
    <QueryContext.Provider value={{ query, setQuery, sort, setSort }}>
      {children}
    </QueryContext.Provider>
  );
};
