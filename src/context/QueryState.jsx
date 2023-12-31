import { createContext, useState } from "react";

export const QueryContext = createContext(null);

export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};