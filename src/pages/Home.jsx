import React, { useContext, useEffect, useState } from "react";
import useFetchUser from "../hooks/useFetchUser";
import UserTable from "../components/UserTable";
import { FaPen } from "react-icons/fa";
import UserModal from "../components/UserModal";

import { ModalContext } from "../context/ModalState";

const Home = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  // const [isOpen, setIsOpen] = useState(false);
  const res = useFetchUser();

  return (
    <main className="container mx-auto mt-10">
      {res?.length == 0 ? (
        <h1 className="text-center text-xl font-semibold">No Data Found</h1>
      ) : (
        <UserTable users={res} />
      )}

      <button
        className="fixed bottom-10 right-10 p-4 rounded-full text-white bg-red-500 shadow-md"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <FaPen />
      </button>

      {isOpen && <UserModal />}
    </main>
  );
};

export default Home;
