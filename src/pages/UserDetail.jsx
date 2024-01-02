import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "../context/ContactState";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const { getSingleContact } = useContext(ContactContext);

  useEffect(() => {
    (async () => {
      const res = await getSingleContact(id);
      setUser(res);
      console.log(res);
    })();
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] flex justify-center items-center flex-col gap-5">
      <h1 className="text-center text-2xl font-semibold">User Details</h1>
      <div className="  bg-white rounded-md overflow-hidden shadow-md">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">
            UserName:- <span className="text-3xl">{user?.username}</span>
          </h2>
          <p className="text-gray-600 mb-2 text-2xl">Email:- {user?.email}</p>
          <p className="text-gray-600 text-2xl">Phone No:- {user?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
