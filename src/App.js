import { Box } from "@mui/material";
import { Time, Searchbar, WidgetContainer } from "./components";

function App() {
  return (
    <Box
      position="absolute"
      top="3rem"
      left="3rem"
      right="3rem"
      bottom="3rem"
      borderRadius="1rem"
      overflow="hidden"
      p="1rem"
      border="1px solid rgba(255, 255, 255, 0.20)"
      boxShadow="0 0 1rem rgba(0, 0, 0, 0.5)"
      sx={{
        backdropFilter: "blur(1rem)",
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" mb="1rem">
        <Time />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Searchbar />
        <WidgetContainer />
      </Box>
    </Box>
  );
}

export default App;
