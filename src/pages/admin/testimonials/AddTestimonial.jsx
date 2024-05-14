import { useState } from "react";
import "../../../assets/css/AddTestimonial.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Fileimg from "../../../assets/images/upload.png";
import { useDispatch } from "react-redux";
import { addTestimonialAsync } from "../../../features/testimonial/testinmonialThunks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTestimonial = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    postTitle: "",
    tag: "",
    description: "",
    contant: "",
    metaTag: "",
    metaKeyword: "",
    metaDescription: "",
    enableComments: false,
    publis: false,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSwitchChange = (name) => (event) => {
    setFormData({ ...formData, [name]: event.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const testimonialData = {
        ...formData,
        // cover: selectedImage,
        cover: "Your main cover image string here",
      };
      dispatch(addTestimonialAsync(testimonialData));
      toast.success("Testimonial Added Successfully!");
      setFormData({
        postTitle: "",
        tag: "",
        description: "",
        contant: "",
        metaTag: "",
        metaKeyword: "",
        metaDescription: "",
        enableComments: false,
        publis: false,
      });
      setSelectedImage(null);
    } catch (error) {
      console.error("Error adding testimonial:", error);
      toast.error("Error adding testimonial");
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
                to="/testimonial-list"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <Typography color="textPrimary">Testimonial List</Typography>
              </Link>

              <Typography color="textPrimary">Testimonial</Typography>
            </Breadcrumbs>
          </div>
          <div>
            <h2 style={{ marginLeft: "20px", marginTop: "20px" }}>
              Add Testimonial
            </h2>
            <div className="add-container">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div>
                  <TextField
                    id="postTitle"
                    label="Post Title"
                    maxRows={4}
                    value={formData.postTitle}
                    onChange={handleChange}
                  />
                  <TextField
                    id="tag"
                    label="Tags"
                    maxRows={4}
                    value={formData.tag}
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
                  <TextField
                    id="contant"
                    label="Content"
                    multiline
                    rows={4}
                    value={formData.contant}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <TextField
                    id="metaTag"
                    label="Meta Title"
                    maxRows={4}
                    value={formData.metaTag}
                    onChange={handleChange}
                  />
                  <TextField
                    id="metaKeyword"
                    label="Meta Keywords"
                    maxRows={4}
                    value={formData.metaKeyword}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <TextField
                    id="metaDescription"
                    label="Meta Description"
                    multiline
                    rows={4}
                    value={formData.metaDescription}
                    onChange={handleChange}
                  />

                  <label htmlFor="input-file" className="drop-area">
                    <input
                      type="file"
                      accept="image/*"
                      id="input-file"
                      hidden
                      onChange={handleFileChange}
                    />
                    <div className="img-view">
                      {selectedImage ? (
                        <img src={selectedImage} alt="Selected" />
                      ) : (
                        <>
                          <img src={Fileimg} alt="Default" />
                          <p>Drag and drop or Click here to upload image</p>
                          <span>Upload any image from desktop</span>
                        </>
                      )}
                    </div>
                  </label>
                </div>

                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.enableComments}
                        onChange={handleSwitchChange("enableComments")}
                      />
                    }
                    label="
                  Enable comments"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.publis}
                        onChange={handleSwitchChange("publis")}
                      />
                    }
                    label="
                  Publish"
                  />
                </FormGroup>
                <div className="submit-btn-box">
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Create Post"}
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

export default AddTestimonial;
