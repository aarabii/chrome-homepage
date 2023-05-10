import React from "react";
import WidgetCards from "./WidgetCards";

import LOGOS from "../assets/logo_data.js";
import { Box } from "@mui/material";

const WidgetContainer = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      marginRight="1rem"
      sx={{ position: "relative" }}
      
    >
      {LOGOS.map((logo) => (
        <WidgetCards
          key={logo.id}
          imageURL={logo.image}
          title={logo.name}
          url={logo.url}
        />
      ))}
    </Box>
  );
};

export default WidgetContainer;
