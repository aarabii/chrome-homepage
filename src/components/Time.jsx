import React, { useState, useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

import morning from "../assets/sun-images/morning.png";
import afternoon from "../assets/sun-images/afternoon.png";
import night from "../assets/sun-images/night.png";

const Time = () => {
  const [time, setTime] = useState(new Date());
  const [greetingImage, setGreetingImage] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const hour = time.getHours();

    if (hour >= 5 && hour < 12) {
      setGreetingImage(morning);
    } else if (hour >= 12 && hour < 20) {
      setGreetingImage(afternoon);
    } else {
      setGreetingImage(night);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [time]);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <Box width="100%" display="flex" justifyContent="space-between">
      <Avatar src={greetingImage} sx={{ width: 30, height: 30 }} />
      <Typography
        variant="h6"
        sx={{
          fontSmooth: "always",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {formattedTime}
      </Typography>
      <Box>
        <SettingsIcon onClick={() => {alert("Will update later")}} />
      </Box>
    </Box>
  );
};

export default Time;
