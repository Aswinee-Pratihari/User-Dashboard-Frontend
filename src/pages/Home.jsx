import React, { useContext, useEffect, useState } from "react";
import useFetchUser from "../hooks/useFetchUser";
import UserTable from "../components/UserTable";
import { FaPen } from "react-icons/fa";
import UserModal from "../components/UserModal";

import { ModalContext } from "../context/ModalState";
import { UserContext } from "../context/UserState";
import Search from "../components/Search";
import { AuthContext } from "../context/AuthState";
import { useNavigate } from "react-router-dom";
import Sort from "../components/Sort";

const Home = () => {
  const navigate = useNavigate();

  const { isOpen, setIsOpen } = useContext(ModalContext);
  const { setUser } = useContext(UserContext);
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/signIn");
    }
  }, []);

  const res = useFetchUser();

  return (
    <main className="container mx-auto mt-10">
      <div className="flex gap-4 items-center ">
        <Search />

        <Sort />
      </div>
      {res?.length == 0 ? (
        <h1 className="text-center text-xl font-semibold">No Data Found</h1>
      ) : (
        <UserTable users={res} />
      )}

      <button
        className="fixed bottom-10 right-10 p-4 rounded-full text-white bg-red-500 shadow-md"
        onClick={() => {
          setIsOpen(true);
          setUser(null);
        }}
      >
        <FaPen />
      </button>

      {isOpen && <UserModal />}
    </main>
  );
};

export default Home;
