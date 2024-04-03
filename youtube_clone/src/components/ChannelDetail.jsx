import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from ".";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh" p={2}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(200deg, rgba(2,0,36,1) 0%, rgba(206,3,184,1) 0%, rgba(0,212,255,1) 100%)",
            zIndex: 5,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box
          sx={{
            mr: { sm: "75px" },
          }}
        ></Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
