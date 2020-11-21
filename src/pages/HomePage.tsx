import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Map from "./Map";
import { pages } from "../utils/common";
import Login from "./Login";
import Profile from "./Profile";
import Registration from "./Registration";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(pages.Map);

  useEffect(() => {}, []);

  //console.log("currentPage", currentPage);

  return (
    <>
      <Header setCurentPage={setCurrentPage} />

      {currentPage === pages.Map && <Map />}
      {currentPage === pages.Profile && <Profile />}
      {currentPage === pages.Login && <Login setCurentPage={setCurrentPage} />}
      {currentPage === pages.Register && (
        <Registration setCurentPage={setCurrentPage} />
      )}
    </>
  );
};

export default React.memo(HomePage);
