import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { QueryContext } from "../context/QueryState";

const Search = () => {
  const { setQuery, query } = useContext(QueryContext);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="mt-6 container mx-auto bg-gray-800 px-4 py-2 rounded-lg flex items-center">
      <input
        type="text"
        value={query}
        placeholder="Search for Restaurant and Food"
        onChange={handleChange}
        className="outline-none  w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
      />
      <FaSearch className="w-5 h-5 text-white ml-2" />
    </div>
  );
};

export default Search;
