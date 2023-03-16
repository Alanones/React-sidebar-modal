import React, { useContext } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { AppContext, useGlobalContext } from "./context";
function App() {
  // const data = useContext(AppContext);
  // const data = useGlobalContext();
  // console.log(data);
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
