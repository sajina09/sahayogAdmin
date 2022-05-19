import React from "react";
import styled from "styled-components";
import { ImDroplet } from "react-icons/im";

const SingleCard = (props) => {
  const { number, bloodGroup } = props;
  return (
    <Section>
      <div className="number">{number}</div>
      <div className="bloodgroup">
        {bloodGroup}
        <ImDroplet />
      </div>
    </Section>
  );
};

const Section = styled.div`
  padding: 1rem;
  width: 150px;
  height: 50px;
  border-radius: 15px;
  background-color: #2c2a2a;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .number {
    padding-left: 1rem;
    font-size: 1.5rem;
  }
  .bloodgroup {
    font-size: 1.2rem;
    svg {
      color: #cd4f4f;
      font-size: 2rem;
    }
  }
`;

export default SingleCard;
