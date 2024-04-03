import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectCategory]);
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        height: "95vh",
        p: 2,
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "calc(100vh-77px)" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectCategory}
          setSelectedCategory={setSelectCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1,
            color: "#FFFFFF",
          }}
        >
          Copyright 2024 Nick Media
        </Typography>
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: "#FFFFFF",
            // mt: 2,
            // ml: { sx: 0, md: 2 },
            mb: 2,
          }}
        >
          {selectCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
