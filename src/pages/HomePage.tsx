import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Map from "../pages/Map";
import { pages } from "../utils/common";
import Login from "./Login";
import Profile from "./Profile";





const HomePage = () => {
 
  const [currentPage, setCurrentPage] = useState<number>(pages.Map)


  useEffect(() => {
   
  }, []);


  console.log("currentPage",currentPage );

  return (
    <>

      < Header setCurentPage={setCurrentPage}/>

      {currentPage === pages.Map && <Map/>}
      {currentPage === pages.Profile && <Profile/>}
      {currentPage === pages.Login && <Login setCurentPage={setCurrentPage} />}
      

   
    </>
  );
};

export default React.memo(HomePage);
