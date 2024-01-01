import React, { useContext, useState } from "react";
import useFetchUser from "../hooks/useFetchUser";
import { QueryContext } from "../context/QueryState";

const Filter = () => {
  const { sort, setSort } = useContext(QueryContext);
  const handleChange = (e) => {
    setSort(e.target.value);
  };
  return (
    <div className="flex-1">
      <label htmlFor="sort" className="block text-sm font-medium text-gray-600">
        Sort By
      </label>
      <select
        id="sort"
        name="sort"
        value={sort}
        onChange={handleChange}
        className="mt-1 p-2 w-full border rounded-md"
      >
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
        <option value="LastModified">Last Modified</option>
        <option value="LastInserted"> Last Inserted</option>
      </select>
    </div>
  );
};

export default Filter;
