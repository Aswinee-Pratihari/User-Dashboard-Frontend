import React from "react";
import Usercard from "./Usercard";

const UserTable = ({ users }) => {
  return (
    <>
      <div className="max-w-full overflow-x-auto mt-10">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
          <thead>
            <tr>
              <th className="hidden md:table-cell px-6 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Username
              </th>
              <th className="hidden md:table-cell px-6 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="hidden md:table-cell px-6 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Usercard user={user} key={user?._id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
