import { Box, Typography } from "@mui/material";
import React from "react";

const WidgetCards = ({ title, imageURL, url }) => {
  return (
    <Box
      backgroundColor="rgb(25, 25, 25)"
      width="100px"
      height="100px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="0.75rem"
      sx={{
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "rgb(35, 35, 35)",
        },
      }}
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <Box>
        <img
          src={imageURL}
          alt={`${title}'s logo`}
          width="50px"
          height="50px"
        />
      </Box>
      <Box backgroundColor="transparent">
        <Typography
          sx={{
            color: "white",
            fontWeight: "lighter",
            fontSize: "1rem",
          }}
          variant="h5"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default WidgetCards;
