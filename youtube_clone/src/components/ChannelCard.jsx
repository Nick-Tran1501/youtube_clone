import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";
const ChannelCard = ({ channelDetail, marginTop }) => {
  console.log(channelDetail);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "358px", md: "320px" },
        // height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              width: "100%",
              height: 180,
              borderRadius: "50%",
              mb: 1,
              //   border: "1px solid #3e3e3e",
            }}
          />
          <Typography variant="h6" fontWeight="bold">
            {channelDetail?.snippet?.title}
            <CheckCircleIcon
              sx={{ fontSize: "12px", ml: "5px", color: "gray" }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="subtitle2" color="gray">
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
