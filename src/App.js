import React from "react";
import styled from "styled-components";
import SingleCard from "./components/Card/SingleCard";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Div>
      <SideBar />
      <Dashboard />
      
    </Div>
  );
};

const Div = styled.div``;
export default App;
