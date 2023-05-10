import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const WidgetCards = ({ title, imageURL, url }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <Box
      width="100px"
      height="100px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="0.75rem"
      boxShadow={
        hovered
          ? "2px 2px 5px  0px rgba(0, 0, 0, 0.75)"
          : "1px 1px 5px 0px rgba(0,0,0,0.25)"
      }
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <Box position="relative">
        <img
          style={{
            transform: hovered ? "scale(1.5)" : "scale(1)",
            transition: "400ms",
          }}
          src={imageURL}
          alt={`${title}'s logo`}
          width="50px"
          height="50px"
        />
      </Box>
      <Box backgroundColor="transparent">
        {hovered ? null : (
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
        )}
      </Box>
    </Box>
  );
};

export default WidgetCards;
