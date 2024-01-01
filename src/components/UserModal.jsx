import React, { useContext, useState } from "react";
import { ContactContext } from "../context/ContactState";
import { ModalContext } from "../context/ModalState";
import { UserContext } from "../context/UserState";

const UserModal = () => {
  const { setIsOpen } = useContext(ModalContext);
  const { user, setUser } = useContext(UserContext);
  const { editContact, postContact } = useContext(ContactContext);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || null,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      await postContact(formData);
    } else {
      await editContact(user?._id, formData);
    }
  };
  return (
    <>
      <div className="fixed left-0 right-0 top-0 bottom-0 bg-gray-700 opacity-65 z-10"></div>
      <div className="shadow-md top-1/2 left-1/2 min-w-[30%] min-h-[60%] max-h-[100%]   bg-white rounded-md px-4 py-4  fixed z-30 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full ">
          <h2 className="text-2xl font-semibold mb-4">Edit/Add User Details</h2>

          <div className="mb-4 ">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              username
            </label>
            <input
              type="text"
              id="username"
              required
              pattern="[A-Za-z]+"
              title="No special charecter or space allowed"
              name="username"
              value={formData?.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]}"
              title="Enter a valid email address"
              value={formData?.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData?.phone}
              onChange={handleChange}
              required
              pattern="[0-9]+"
              title="Only numbers allowed"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex justify-between text-white font-medium text-lg">
            <button type="submit" className="bg-green-500 px-6 py-2 rounded-lg">
              Save
            </button>
            <button
              className="bg-red-500 px-6 py-2 rounded-lg "
              onClick={(e) => {
                e.preventDefault();
                setUser(null);
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserModal;
