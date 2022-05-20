import React from "react";
import styled from "styled-components";
import {BsPeople} from "react-icons/bs";

const TotalDoners = () => {
  return (
    <Section>
      <div className="container">
        <div className="left">
          <h3>3</h3>
          donor
        </div>
        <div className="right">
            
            <BsPeople/>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  .container {
    background-color: #161b64;
    width: 150px;
    height: 50px;
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      text-align: center;
      h3 {
        /* padding-left: 10px; */
      }
    }
    .right{
        svg{
            font-size: 1.5rem;
            color: #cd4f4f;

        }
    }
  }
`;

export default TotalDoners;
