import React, { useState, useEffect } from "react";
import { Box, Link } from "@primer/react";
import { useNavigate, useLocation } from "react-router-dom";
//import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("about");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1); //remove leading /
    setActiveTab(path || "about");
  }, [location.pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); //update active tab when clicked
    navigate(`/${tabName}`);
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "20px",
    marginLeft: "20px",
    marginRight: "40px",
    borderBottom: "2px solid #e1e4e8",
    width: "calc(100% - 80px)",
    fontFamily: "Inter",
  };

  //styles for inactive tabs
  const linkStyle = {
    padding: "10px 20px",
    textDecoration: "none",
    color: "#586069",
    fontWeight: "normal",
    backgroundColor: "transparent",
    marginRight: "10px",
    display: "inline-block",
    position: "relative",
    zIndex: 1,
    transition: "color 0.3s ease, background-color 0.3s ease",
  };

  //styles for active tab
  const activeLinkStyle = {
    ...linkStyle,
    fontWeight: "normal",
    color: "#333",
    backgroundColor: "#ffffff",
    border: "2px solid #e1e4e8",
    borderBottomColor: "#ffffff",
    borderRadius: "8px 8px 0 0",
    zIndex: 2,
    marginBottom: "-2px",
  };

  return (
    <Box as="nav" style={navbarStyle} bg="#ffffff">
      <Link
        onClick={() => handleTabClick("about")}
        style={activeTab === "about" ? activeLinkStyle : linkStyle}
      >
        About Me
      </Link>
      <Link
        onClick={() => handleTabClick("skills")}
        style={activeTab === "skills" ? activeLinkStyle : linkStyle}
      >
        Skills
      </Link>
      <Link
        onClick={() => handleTabClick("interests")}
        style={activeTab === "interests" ? activeLinkStyle : linkStyle}
      >
        Interests
      </Link>
      <Link
        onClick={() => handleTabClick("contact")}
        style={activeTab === "contact" ? activeLinkStyle : linkStyle}
      >
        Contact
      </Link>
    </Box>
  );
};

export default Navbar;
