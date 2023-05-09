import React, { useState } from "react";
import {
  Avatar,
  TextField,
  Box,
  Typography,
  Menu,
  IconButton,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";

import google_logo from "../assets/search_engine/google.png";
import bing_logo from "../assets/search_engine/bing.png";
import yahoo_logo from "../assets/search_engine/yahoo.png";
import duckduckgo_logo from "../assets/search_engine/duckduckgo.png";

const searchEngines = [
  {
    label: "Google",
    value: "https://www.google.com/search?q=",
    logo: google_logo,
  },
  { label: "Bing", value: "https://www.bing.com/search?q=", logo: bing_logo },
  {
    label: "Yahoo",
    value: "https://search.yahoo.com/search?p=",
    logo: yahoo_logo,
  },
  {
    label: "DuckDuckGo",
    value: "https://duckduckgo.com/?q=",
    logo: duckduckgo_logo,
  },
];

const Searchbar = () => {
  const [searchEngine, setSearchEngine] = useState(searchEngines[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      paddingLeft="0.25rem"
      paddingRight="0.25rem"
      display="flex"
      alignItems="center"
      width="500px"
      borderRadius="8px"
      backgroundColor="transparent"
      border="1px solid #ccc"
      boxShadow="0px 2px 5px rgba(0, 0, 0, 0.5)"
      marginBottom="4rem"
    >
      <Box
        display="flex"
        alignItems="center"
        marginRight="1rem"
        sx={{ position: "relative" }}
      >
        <Avatar
          src={searchEngine.logo}
          sx={{ width: 30, height: 30, cursor: "pointer" }}
          onClick={(event) =>
            setAnchorEl((prev) => (prev ? null : event.currentTarget))
          }
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          sx={{ "& .MuiPaper-root": { minWidth: "unset" } }}
        >
          {searchEngines.map((engine) => (
            <MenuItem
              key={engine.label}
              onClick={() => {
                setSearchEngine(engine);
                setAnchorEl(null);
              }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar
                src={engine.logo}
                sx={{ width: 30, height: 30, marginRight: "0.5rem" }}
              />
              {engine.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <TextField
        fullWidth
        placeholder={`Search on ${searchEngine.label}`}
        variant="standard"
        InputProps={{
          disableUnderline: true,
          inputProps: {
            style: {
              fontFamily: "sans-serif",
              fontWeight: "lighter",
              fontSize: "1.25rem",
              wordSpacing: "0.20rem",
              letterSpacing: "0.10rem",
            },
          },
        }}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            if (searchTerm === "") {
              window.open(searchEngine.value, "_blank");
              return;
            } else {
              window.open(searchEngine.value + searchTerm, "_blank");
            }
          }
        }}
      />
      <Box marginRight="0.25rem">
        <SearchIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            if (searchTerm === "") {
              window.open(searchEngine.value, "_blank");
              return;
            } else {
              window.open(searchEngine.value + searchTerm, "_blank");
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default Searchbar;
