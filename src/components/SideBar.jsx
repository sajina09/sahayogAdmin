import React, { useState } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { ImDroplet } from "react-icons/im";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <ImDroplet />
            <span> Sahayog </span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li
                onClick={() => setActiveLink(1)}
                className={activeLink === 1 ? "active" : ""}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard </span>
                </a>
              </li>
              <li
                onClick={() => setActiveLink(2)}
                className={activeLink === 2 ? "active" : ""}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Doners </span>
                </a>
              </li>
              <li
                onClick={() => setActiveLink(3)}
                className={activeLink === 3 ? "active" : ""}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Donation details </span>
                </a>
              </li>
              <li
                onClick={() => setActiveLink(4)}
                className={activeLink === 4 ? "active" : ""}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span>Blood Groups </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span> Logout </span>
          </a>
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand{
      width:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:.5rem;
      svg{
        color : #cd4f4f;
        font-size: 2rem;
      }
      span{
        color : #cd4f4f;
        font-size: 1.8rem;
        text-transform: uppercase;
        font-family: 'Permanent Marker', cursive; 
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap:1rem;
        li{
          padding : 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover{
            background-color: #cd4f4f;
            a{

              color: black;
            }
          }
          a{
              text-decoration: none;
              display: flex;
              gap:1rem;
              color: #fff;
            }
        }
        .active {
          background-color: #cd4f4f;
        }
        a{
          color: #fff;
        }
      }
    }
  }
  }
  .logout{
    background-color: #282963;
    cursor: pointer;
    margin-bottom: 50px;
    padding : 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover{
      background-color: #cd4f4f;
    }
    a{
      text-decoration : none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #fff;
    }
  }
`;
export default SideBar;
