import React from "react";
import { Box, Text, Heading } from "@primer/react";

const About = () => (
  // Main container
  <Box as="section" p={4} width="80%" mx="auto" mt={4}>
    {/* styles for heading */}
    <Heading
      as="h1"
      mb={3}
      style={{
        fontFamily: "Inter",
        fontWeight: "bold",
        marginLeft: "-100px",
        fontSize: "24px",
        marginTop: "-30px",
      }}
    >
      About Me
    </Heading>
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      p={3}
    >
      <Box
        width="550px"
        height="550px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr={5}
        style={{ marginLeft: "-120px" }}
      >
        {/* image comptainer  */}
        <img
          src={require("/Users/nitz/Downloads/FrontEnd Development/fedev/src/Me.jpg")} // Replace with your image file name
          alt="Your description"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "6px",
          }}
        />
      </Box>
      {/* Styles for content */}
      <Box fontSize={2} lineHeight={1.5} style={{ textAlign: "left" }}>
        <Text
          as="div"
          mb={2}
          style={{
            fontFamily: "Inter",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          City:{" "}
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: "normal",
              fontSize: "18px",
              color: "#333",
            }}
          >
            Buffalo
          </span>
        </Text>
        <Text
          as="div"
          mb={2}
          style={{
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Hometown:{" "}
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: "normal",
              fontSize: "18px",
              color: "#333",
            }}
          >
            Chennai
          </span>
        </Text>
        <Text
          as="div"
          mb={2}
          style={{
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Pets:{" "}
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: "normal",
              fontSize: "18px",
              color: "#333",
            }}
          >
            Birds
          </span>
        </Text>
        <Text
          as="div"
          mb={2}
          style={{
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Status:{" "}
          <span
            style={{
              fontFamily: "Inter",
              fontWeight: "normal",
              fontSize: "18px",
              color: "#333",
            }}
          >
            Happy ^_^
          </span>
        </Text>
      </Box>
    </Box>
  </Box>
);

export default About;
