// import React, { useState } from "react";
// import { Box, Button, Checkbox, Text } from "@primer/react";

// const DropdownMenu = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedItems, setSelectedItems] = useState({
//     languages: true,
//     education: true,
//     operations: true,
//   });

//   const toggleDropdown = () => {
//     setOpen(!open);
//   };

//   const toggleItem = (item) => {
//     setSelectedItems((prevState) => ({
//       ...prevState,
//       [item]: !prevState[item],
//     }));
//   };

//   return (
//     <Box>
//       <Button variant="default" onClick={toggleDropdown} sx={{ fontSize: 1 }}>
//         View: All
//       </Button>
//       {open && (
//         <Box
//           bg="white"
//           boxShadow="0 1px 3px rgba(27, 31, 35, 0.1)"
//           borderRadius={6}
//           mt={2}
//           p={3}
//           style={{ position: "absolute", zIndex: 100 }}
//         >
//           <Box display="flex" flexDirection="column">
//             {Object.keys(selectedItems).map((item, index) => (
//               <Box key={index} mb={2}>
//                 <Checkbox
//                   checked={selectedItems[item]}
//                   onChange={() => toggleItem(item)}
//                 />
//                 <Text ml={2}>
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </Text>
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default DropdownMenu;
