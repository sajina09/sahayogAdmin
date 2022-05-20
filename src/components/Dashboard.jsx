import React from "react";
import styled from "styled-components";
import SingleCard from "./Card/SingleCard";
import NavBar from "./NavBar";
import TotalDoners from "./TotalDoners";

const Dashboard = () => {
  return (
    <Section>
      <NavBar />
      <div className="grid">
        <h3> Available blood per group in liters</h3>
        <div className="row__one">
          <SingleCard number="5" bloodGroup="A+" />
          <SingleCard number="5" bloodGroup="A+" />
          <SingleCard number="5" bloodGroup="A+" />
          <SingleCard number="5" bloodGroup="A+" />
          <SingleCard number="5" bloodGroup="A+" />
        </div>
        <div className="row__two">part 2
        
        <TotalDoners/>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2.5rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      height: 50%;
      gap: 2rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
`;

export default Dashboard;
