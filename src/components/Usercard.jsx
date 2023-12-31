import React, { useContext } from "react";
import { ModalContext } from "../context/ModalState";
import { UserContext } from "../context/UserState";
import axios from "axios";

const Usercard = ({ user }) => {
  const { setIsOpen } = useContext(ModalContext);
  const { setUser } = useContext(UserContext);

  const handleDelete = async (id) => {
    const data = await axios.delete(`http://localhost:3000/users/${id}`);
    setUser(data?.data);
  };
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
