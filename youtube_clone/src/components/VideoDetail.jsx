import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Stack, Box, Typography } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setRelatedVideos(data.items);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet) return <div>Loading...</div>;
  const {
    snippet,
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh" p={2}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
              {snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#FFf",
                py: 1,
                px: 2,
              }}
            >
              <Link to={`/channel/${snippet?.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color={"#FFF"}
                >
                  {snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap={1} alignItems="center">
                <Typography variant="subtitle2">
                  {parseInt(viewCount).toLocaleString()} views •
                </Typography>
                <Typography variant="subtitle2">
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
