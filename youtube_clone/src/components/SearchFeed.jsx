import React from "react";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box
      sx={{
        overflowY: "auto",
        height: "95vh",
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
        Search results for:
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
        Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
