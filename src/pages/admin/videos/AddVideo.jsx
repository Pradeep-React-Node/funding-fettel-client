import React, { useState } from "react";
import "../../../assets/css/AddTestimonial.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addVideoAsync } from "../../../features/video/videoThunk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddVideo = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      dispatch(addVideoAsync(formData));
      toast.success("Video Added Successfully!");
      setFormData({
        title: "",
        url: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding video:", error);
      toast.error("Error adding video");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="main-conent-box mt-3">
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
              <Link
                to="/video"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <Typography color="textPrimary">Video List</Typography>
              </Link>

              <Typography color="textPrimary">Add Video</Typography>
            </Breadcrumbs>
          </div>
          <div>
            <h2 style={{ marginLeft: "20px", marginTop: "20px" }}>New Video</h2>
            <div className="add-container">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div>
                  <TextField
                    id="title"
                    label="Video Title"
                    maxRows={4}
                    value={formData.title}
                    onChange={handleChange}
                  />
                  <TextField
                    id="url"
                    label="URL"
                    maxRows={4}
                    value={formData.url}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <TextField
                    id="description"
                    label="Description"
                    multiline
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="submit-btn-box">
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={loading}
                  >
                    {" "}
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVideo;
