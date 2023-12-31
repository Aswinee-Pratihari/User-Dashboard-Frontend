import React, { useContext } from "react";
import { ModalContext } from "../context/ModalState";
import { UserContext } from "../context/UserState";

const Usercard = ({ user }) => {
  const { setIsOpen } = useContext(ModalContext);
  const { setUser } = useContext(UserContext);
  return (
    <tr key={user.id}>
      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
        {user.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
        {user.email}
      </td>
      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
        {user.phone}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          onClick={() => {
            setIsOpen(true);
            setUser(user);
          }}
          className="text-blue-500 hover:underline mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Usercard;
