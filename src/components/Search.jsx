import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { QueryContext } from "../context/QueryState";

const Search = () => {
  const { setQuery, query } = useContext(QueryContext);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className=" flex-[2] container mx-auto bg-gray-300 px-4 py-2 rounded-lg flex items-center">
      <input
        type="text"
        value={query}
        placeholder="Search using username email or phone Number"
        onChange={handleChange}
        className="outline-none  w-full px-4 py-2 text-black font-semibold bg-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
      />
      <FaSearch className="w-5 h-5 text-black ml-2" />
    </div>
  );
};

export default Search;
