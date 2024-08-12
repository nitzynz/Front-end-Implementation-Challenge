import React from "react";
import { Box, Heading, Text, Link } from "@primer/react";

const Contact = () => (
  // Main container
  <Box as="section" p={4} width="80%" mx="auto" mt={4}>
    {/* Styles for heading */}
    <Heading
      as="h1"
      mb={3}
      style={{
        fontFamily: "Inter",
        fontWeight: "bold",
        marginLeft: "-100px",
        marginTop: "-30px",
        fontSize: "24px",
      }}
    >
      Contact
    </Heading>
    {/* Styles for content */}
    <Text
      as="p"
      mb={3}
      style={{
        color: "#6c757d",
        fontFamily: "Inter",
        fontWeight: "bold",
        marginLeft: "-100px",
      }}
    >
      <Link
        href="https://www.linkedin.com/in/nithya-g/"
        style={{
          color: "#007bff",
          textDecoration: "none",
          fontFamily: "Inter",
          fontWeight: "bold",
        }}
      >
        LinkedIn
      </Link>
    </Text>
    <Text
      as="p"
      mb={3}
      style={{
        color: "#6c757d",
        fontFamily: "Inter",
        fontWeight: "bold",
        marginLeft: "-100px",
      }}
    >
      Phone Number:{" "}
      <span
        style={{
          fontFamily: "Inter",
          color: "#6c757d",
          fontWeight: "normal",
        }}
      >
        {"+1 (716)-936-4515"}
      </span>
    </Text>
    <Text
      as="p"
      mb={3}
      style={{
        color: "#6c757d",
        fontFamily: "Inter",
        fontWeight: "bold",
        marginLeft: "-100px",
      }}
    >
      Email:{" "}
      <span
        style={{
          fontFamily: "Inter",
          color: "#6c757d",
          fontWeight: "normal",
        }}
      >
        {"ngovinda@buffalo.edu"}
      </span>
    </Text>
    <Text
      as="p"
      mb={3}
      style={{
        color: "#6c757d",
        fontFamily: "Inter",
        fontWeight: "bold",
        marginLeft: "-100px",
      }}
    >
      Address:{" "}
      <span
        style={{
          fontFamily: "Inter",
          color: "#6c757d",
          fontWeight: "normal",
        }}
      >
        {"The State University of New York at Buffalo"}
      </span>
    </Text>
  </Box>
);

export default Contact;
