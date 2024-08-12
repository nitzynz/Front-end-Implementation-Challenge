import React, { useState } from "react";
import { Box, Heading, Text, Button } from "@primer/react";
import { CheckIcon, TriangleDownIcon } from "@primer/octicons-react";

//useState hook for state of selected skill
const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState({
    languages: true,
    education: true,
    operations: true,
  });

  // useState hook for dropdown menu visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  //toggle selected skill
  const toggleSkill = (skill) => {
    setSelectedSkills((prev) => ({ ...prev, [skill]: !prev[skill] }));
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // styles for menu items
  const dropdownItemStyle = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px", //padding for top, bottom
    position: "relative",
    lineHeight: "1.2", // line-height for more space vertically while hovering
    transition: "background-color 0.2s ease-in-out",
    borderRadius: "15px",
    fontSize: "12px",
    width: "150px",
    height: "10px",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  };

  // const dropdownItemHoverStyle = {
  //   ":hover": {
  //     backgroundColor: "#f6f8fa",
  //     width: "100%",
  //     paddingTop: "5px",
  //     paddingBottom: "5px",
  //     borderRadius: "10px",
  //   },
  // };

  // const combinedItemStyle = {
  //   display: "flex",
  //   alignItems: "center",
  //   width: "100%",
  // };

  //space for checkmark
  const iconPlaceholderStyle = {
    width: "12px",
    height: "12px",
    display: "inline-block",
    marginRight: "4px",
  };

  return (
    //Main container
    <Box
      as="section"
      p={4}
      width="90%"
      mx="auto"
      mt={1}
      style={{
        fontFamily: "Inter",
        marginLeft: "10px",
      }}
    >
      {/* styles for heading */}
      <Heading
        as="h1"
        mb={3}
        style={{
          fontFamily: "Inter",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        Skills
      </Heading>
      <Box mb={3} mt={2} position="relative">
        {/* styles for dropdown button */}
        <Button
          variant="default"
          onClick={toggleDropdown}
          style={{
            fontSize: "12px",
            padding: "5px 10px",
            backgroundColor: "#f6f8fa",
            color: "#24292e",
            border: "1px solid #d1d5da",
            borderRadius: "4px",
            boxShadow: "0 1px 3px rgba(27, 31, 35, 0.1)",
            display: "flex",
            alignItems: "center",
            fontFamily: "Inter",
          }}
        >
          View:{""}
          <span style={{ fontWeight: "bold", marginLeft: "4px" }}>
            All
          </span>{" "}
          {/* styles for arrow */}
          <TriangleDownIcon
            size={12}
            style={{ marginLeft: "5px", color: "#586069" }}
          />{" "}
        </Button>
        {dropdownVisible && (
          <Box
            position="absolute"
            top="100%"
            mt={1}
            bg="white"
            boxShadow="0 4px 12px rgba(27, 31, 35, 0.15)"
            borderRadius={6}
            zIndex={100}
            p={2}
            style={{
              minWidth: "180px",
              transition: "all 0.3s ease-in-out",
              fontSize: "14px",
              fontFamily: "Inter",
            }}
          >
            {/* drop down menu */}
            <Box
              as="div"
              onClick={() => toggleSkill("languages")}
              style={dropdownItemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f6f8fa")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <span style={iconPlaceholderStyle}>
                {selectedSkills.languages && <CheckIcon />}
              </span>
              <Text fontFamily="Inter" fontSize="12px" ml={2}>
                Languages
              </Text>
            </Box>
            <Box
              as="div"
              onClick={() => toggleSkill("education")}
              style={dropdownItemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f6f8fa")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <span style={iconPlaceholderStyle}>
                {selectedSkills.education && <CheckIcon />}
              </span>
              <Text fontFamily="Inter" fontSize="12px" ml={2}>
                Education
              </Text>
            </Box>
            <Box
              as="div"
              onClick={() => toggleSkill("operations")}
              style={dropdownItemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f6f8fa")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <span style={iconPlaceholderStyle}>
                {selectedSkills.operations && <CheckIcon />}
              </span>
              <Text fontFamily="Inter" fontSize="12px" ml={2}>
                Operations
              </Text>
            </Box>
          </Box>
        )}
      </Box>
      {/* container for selected skills and displaying the same */}
      <Box display="flex" justifyContent="space-between">
        {selectedSkills.languages && (
          <Box
            p={3}
            borderRadius={6}
            boxShadow="0 1px 3px rgba(27, 31, 35, 0.1)"
            bg="#ffffff"
            flex="1"
            m={2}
          >
            <Text fontFamily="Inter" fontSize="14px" fontWeight="bold" mb={2}>
              Languages
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="normal"
              style={{ display: "block" }}
            >
              {" Java, JavaScript, Python, Go"}
            </Text>
          </Box>
        )}
        {selectedSkills.education && (
          <Box
            p={3}
            borderRadius={6}
            boxShadow="0 1px 3px rgba(27, 31, 35, 0.1)"
            bg="#ffffff"
            flex="1"
            m={2}
          >
            <Text fontFamily="Inter" fontSize="14px" fontWeight="bold" mb={2}>
              Education
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="normal"
              style={{ display: "block" }}
            >
              {"Masters' Degree in Computer Science and Engineering"}
            </Text>
          </Box>
        )}
        {selectedSkills.operations && (
          <Box
            p={3}
            borderRadius={6}
            boxShadow="0 1px 3px rgba(27, 31, 35, 0.1)"
            bg="#ffffff"
            flex="1"
            m={2}
          >
            <Text fontFamily="Inter" fontSize="14px" fontWeight="bold" mb={2}>
              Operations
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="normal"
              style={{ display: "block" }}
            >
              {
                "Working for software development, machine learning and GenAI projects"
              }
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Skills;
