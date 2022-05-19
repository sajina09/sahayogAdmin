import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const NavBar = () => {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Admin,</h4>
        <h3>
          {" "}
          Welcome to <span>SAHAYOG </span> dashboard{" "}
        </h3>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #fff;
  .title {
    h3 {
      padding-top: 0.4rem;
      span {
        margin-left: 0.5rem;
        color: #cd4f4f;
        letter-spacing: 0.2rem;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  .search {
    background-color: #2c2a2a;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;

    svg {
      color: #cd4f4f;
    }
    input {
      background-color: transparent;
      border: none;
      color: #cd4f4f;
      letter-spacing: 0.3rem;

      &::placeholder {
        color: #cd4f4f;
        /* font-family: "Permanent Marker", cursive; */
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export default NavBar;
