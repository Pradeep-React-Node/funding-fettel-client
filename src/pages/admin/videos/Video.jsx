import React, { useEffect } from "react";
import "../../../assets/css/Video.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getVideoAsync } from "../../../features/video/videoThunk";
const Video = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state?.videos?.videos);
  console.log("VideossList++++++++++++", videos);

  useEffect(() => {
    dispatch(getVideoAsync());
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid">
        <div className="main-conent-box mt-5">
          <div className="breadcrumbs-container">
            <Breadcrumbs
              separator={<KeyboardDoubleArrowRightIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link
                to="/"
                style={{
                  color: "black",
                }}
              >
                <HomeIcon style={{ marginRight: "5px" }} />
                <span style={{ verticalAlign: "middle" }}>Dashboard</span>
              </Link>
              <Typography color="textPrimary">Video List</Typography>
            </Breadcrumbs>
            <Link to="/add-video">
              <button className="new-post-btn">+ Add Video</button>
            </Link>
          </div>
          <div>
            <h2 style={{ marginLeft: "20px", marginTop: "20px" }}>Videos</h2>
            <div className="video-card-row">
              {videos?.map((video) => (
                <div className="card" key={video.id}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={video?.url}
                    frameBorder="0"
                    allowfullscreen
                  ></iframe>
                  <div className="card-body">
                    <h6 className="card-title">{video?.title}</h6>
                    <p className="card-text">{video?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Grid
              container
              justifyContent="center"
              style={{ marginTop: "20px" }}
            >
              <Pagination count={8} color="primary" />
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
