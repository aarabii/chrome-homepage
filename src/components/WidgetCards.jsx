import { Box, Card } from "@mui/material";
import React from "react";
import useFavicon from "../hook/useFavicon";
import useTitle from "../hook/useTitle";

// const WidgetCards = ({ srcURL }) => {
//   const favicon = useFavicon(srcURL);
//   const title = useTitle(srcURL);
//   return (
//     <Card>
//       <Box
//         display="flex"
//         alignItems="center"
//         marginRight="1rem"
//         sx={{ position: "relative" }}
//       >
//         <img src={favicon} alt="favicon" />
//       </Box>
//       <Box
//         display="flex"
//         alignItems="center"
//         marginRight="1rem"
//         sx={{ position: "relative" }}
//       >
//         <h1>{title}</h1>
//       </Box>
//     </Card>
//   );
// };

const WidgetCards = ({ key, imageURL, title, url }) => {
  return (
    <Card key={key}>
      <Box
        display="flex"
        alignItems="center"
        marginRight="1rem"
        sx={{ position: "relative" }}
      >
        <img src={imageURL} alt="favicon" />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        marginRight="1rem"
        sx={{ position: "relative" }}
      >
        <a href={url} target="_blank">
          {title}
        </a>
      </Box>
    </Card>
  );
};

export default WidgetCards;
