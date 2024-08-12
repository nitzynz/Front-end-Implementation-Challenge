import React, { useState } from "react";
import { Box, Heading, Text, Button } from "@primer/react";
import { CheckIcon, TriangleDownIcon } from "@primer/octicons-react";

//useState hook for state of selected interest
const Interests = () => {
  const [selectedInterests, setSelectedInterests] = useState({
    music: true,
    movies: true,
    television: true,
    hobbies: true,
  });

  // useState hook for dropdown menu visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  //toggle selected interest
  const toggleInterest = (interest) => {
    setSelectedInterests((prev) => ({ ...prev, [interest]: !prev[interest] }));
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const dropdownItemStyle = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px", //padding for top, bottom
    position: "relative",
    lineHeight: "1.2", // line-height for more space vertically while hovering
    transition: "background-color 0.2s ease-in-out",
    borderRadius: "15px",
    fontSize: "14px",
    width: "150px",
    height: "10px",
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
      style={{ marginLeft: "10px" }}
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
        Interests
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
            display: "flex", // Align items inside the button
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
              fontSize: "12px",
              fontFamily: "Inter",
            }}
          >
            {/* drop down menu */}
            <Box
              as="div"
              onClick={() => toggleInterest("music")}
              style={dropdownItemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f6f8fa")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <span style={iconPlaceholderStyle}>
                {selectedInterests.music && <CheckIcon />}
              </span>
              <Text fontFamily="Inter" fontSize="12px" ml={2}>
                Music
              </Text>
            </Box>
            <Box
              as="div"
              onClick={() => toggleInterest("movies")}
              style={dropdownItemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f6f8fa")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <span style={iconPlaceholderStyle}>
                {selectedInterests.movies && <CheckIcon />}
              </span>
              <Text fontFamily="Inter" fontSize="12px" ml={2}>
                Movies
              </Text>
            </Box>
            <Box
              as="div"
              onClick={() => toggleInterest("television")}
              style={dropdownItemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f6f8fa")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <span style={iconPlaceholderStyle}>
                {selectedInterests.television && <CheckIcon />}
              </span>
              <Text fontFamily="Inter" fontSize="12px" ml={2}>
                Television
              </Text>
            </Box>
            <Box
              as="div"
              onClick={() => toggleInterest("hobbies")}
              style={dropdownItemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f6f8fa")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <span style={iconPlaceholderStyle}>
                {selectedInterests.hobbies && <CheckIcon />}
              </span>
              <Text fontFamily="Inter" fontSize="12px" ml={2}>
                Hobbies
              </Text>
            </Box>
          </Box>
        )}
      </Box>
      {/* container for selected skills and displaying the same */}
      <Box display="flex" justifyContent="space-between">
        {selectedInterests.music && (
          <Box
            p={3}
            borderRadius={6}
            boxShadow="0 1px 3px rgba(27, 31, 35, 0.1)"
            bg="#ffffff"
            flex="1"
            m={2}
          >
            <Text fontFamily="Inter" fontSize="14px" fontWeight="bold" mb={2}>
              Music
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="normal"
              style={{ display: "block" }}
            >
              {" Hip hop, Jazz, Country"}
            </Text>
          </Box>
        )}
        {selectedInterests.movies && (
          <Box
            p={3}
            borderRadius={6}
            boxShadow="0 1px 3px rgba(27, 31, 35, 0.1)"
            bg="#ffffff"
            flex="1"
            m={2}
          >
            <Text fontFamily="Inter" fontSize="14px" fontWeight="bold" mb={2}>
              Movies
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="normal"
              style={{ display: "block" }}
            >
              {" Sci-fi, Thriller, Animation"}
            </Text>
          </Box>
        )}
        {selectedInterests.television && (
          <Box
            p={3}
            borderRadius={6}
            boxShadow="0 1px 3px rgba(27, 31, 35, 0.1)"
            bg="#ffffff"
            flex="1"
            m={2}
          >
            <Text fontFamily="Inter" fontSize="14px" fontWeight="bold" mb={2}>
              Television
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="normal"
              style={{ display: "block" }}
            >
              {" Sports, News, Infotainment"}
            </Text>
          </Box>
        )}
        {selectedInterests.hobbies && (
          <Box
            p={3}
            borderRadius={6}
            boxShadow="0 1px 3px rgba(27, 31, 35, 0.1)"
            bg="#ffffff"
            flex="1"
            m={2}
          >
            <Text fontFamily="Inter" fontSize="14px" fontWeight="bold" mb={2}>
              Hobbies
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="normal"
              style={{ display: "block" }}
            >
              {" Swimming, Tennis, Fishing"}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Interests;
