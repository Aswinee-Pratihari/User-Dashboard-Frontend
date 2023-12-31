import React, { useEffect, useState } from "react";
import useFetchUser from "../hooks/useFetchUser";
import UserTable from "../components/UserTable";

const Home = () => {
  const res = useFetchUser();

  return (
    <main className="container mx-auto mt-10">
      {res?.length == 0 ? (
        <h1 className="text-center text-xl font-semibold">No Data Found</h1>
      ) : (
        <>
          <UserTable users={res} />
        </>
      )}
    </main>
  );
};

export default Home;
