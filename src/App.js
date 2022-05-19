import React from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Div>
      <SideBar />
      <NavBar />
    </Div>
  );
};

const Div = styled.div``;
export default App;
