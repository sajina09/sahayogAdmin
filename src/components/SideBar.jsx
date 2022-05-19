import React from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const SideBar = () => {
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaTaxi />
            <span> Sahayog </span>
          </div>
          <div className="toggle"></div>
          <div className="links">
            <ul>
              <li>
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard </span>
                </a>
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard </span>
                </a>
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard </span>
                </a>
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard </span>
                </a>
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};

const Section = styled.section``;
export default SideBar;
