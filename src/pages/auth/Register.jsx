import { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import avatar from "../../assets/images/user.png";
import firmIcon from "../../assets/images/building.png";
import "../../assets/css/Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "../../features/user/userThunks";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const dispatch = useDispatch();
  const [activeForm, setForm] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: null,
    password: "",
    user_type: activeForm,
  });

  const [centerFormData, setCenterFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: null,
    user_type: activeForm,
  });
  // const handleFormUser = () => {
  //   setForm("user");
  // };
  // const handleFormFirm = () => {
  //   setForm("firm");
  // };
  const handleFormUser = () => {
    setForm("user");
    setFormData({
      ...formData,
      user_type: "user",
    });
  };

  const handleFormFirm = () => {
    setForm("firm");
    setCenterFormData({
      ...centerFormData,
      user_type: "center",
    });
  };

  const handleInputeChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCenterInputChange = (event) => {
    const { name, value } = event.target;
    setCenterFormData({
      ...centerFormData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (activeForm === "user") {
      const response = await dispatch(
        registerUserAsync({ ...formData, username: formData.email })
      );
      console.log("response+++", response);
      try {
        if (response.type === "user/register/fulfilled") {
          // alert("login success full");
          toast.success("Register Successfully!");
          navigate("/");
          setLoader(false);
        }
      } catch (error) {
        toast.error("Email or phone alreday registred");
        setLoader(false);
      }
    }
    if (activeForm === "firm") {
      const response = await dispatch(
        registerUserAsync({ ...centerFormData, username: centerFormData.email })
      );
      try {
        if (response.type === "user/register/fulfilled") {
          // alert("login success full");
          toast.success("Register Successfully!");
          navigate("/");
          setLoader(false);
        }
      } catch (error) {
        toast.error("Email or phone alreday registred");
        setLoader(false);
      }
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (activeForm === "user") {
  //     const response = await dispatch(
  //       registerUserAsync({ ...formData, username: formData.email })
  //     );
  //     console.log("response+++", response);
  //     try (response.type === "user/register/fulfilled") {
  //       // alert("login success full");
  //       toast.success("Register Successfully!");
  //       navigate("/");
  //       setLoader(false);
  //     } catch(error) {
  //       toast.error("Server error");
  //       setLoader(false);
  //     }
  //   }
  //   if (activeForm === "firm") {
  //     const response = await dispatch(
  //       registerUserAsync({ ...centerFormData, username: centerFormData.email })
  //     );
  //     if (response.type === "user/register/fulfilled") {
  //       // alert("login success full");
  //       toast.success("Register Successfully!");
  //       navigate("/");
  //       setLoader(false);
  //     } else {
  //       toast.error("Server error");
  //       setLoader(false);
  //     }
  //   }
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(registerUserAsync({ ...formData, ["username"]: formData.email }));
  // };

  return (
    <>
      <div className="register-main-box">
        <Container className="icons-container">
          <Row>
            <Col className="user-icon-col">
              <div
                className={`user-icon ${
                  activeForm === "user" ? "active-form" : ""
                }`}
              >
                <img
                  src={avatar}
                  alt="User"
                  className={`user-icon-img cursor-pointer ${
                    activeForm === "user" ? "active-form" : ""
                  }`}
                  onClick={handleFormUser}
                />
                <div
                  className="icon-heading cursor-pointer"
                  onClick={handleFormUser}
                >
                  Parent
                </div>
              </div>
            </Col>
            <Col className="firm-icon-col">
              <div
                className={`firm-icon cursor-pointer ${
                  activeForm === "firm" ? "" : "active-form"
                }`}
              >
                <img
                  src={firmIcon}
                  alt="User"
                  className={`firm-icon-img ${
                    activeForm === "firm" ? "" : "active-form"
                  }`}
                  onClick={handleFormFirm}
                />
                <div
                  className="icon-heading cursor-pointer"
                  onClick={handleFormFirm}
                >
                  Center
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="reg-form-container">
          <Row
            className={`p-3 ${
              activeForm === "user" ? "design-right" : " design-left"
            }`}
          >
            {activeForm === "user" ? (
              <Col
                md={7}
                className="p-4 design-element reg-form-left"
                style={{ opacity: activeForm === "user" ? 1 : 0 }}
              >

                <div className="reg-form-header">Parent Sign Up</div>

                <div style={{ marginTop: "10px" }}>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group
                          style={{ marginRight: "5px" }}
                          className="mb-2"
                        >
                          <Form.Label htmlFor="first_name">
                            First Name
                          </Form.Label>
                          <Form.Control
                            autoFocus
                            required
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputeChange}
                            placeholder="First Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group
                          style={{ marginLeft: "5px" }}
                          className="mb-2"
                        >
                          <Form.Label htmlFor="last_name">Last Name</Form.Label>
                          <Form.Control
                            autoFocus
                            required
                            type="text"
                            name="last name"
                            placeholder="Last Name"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group id="email">
                      <Form.Label htmlFor="email_id">Email</Form.Label>
                      <InputGroup>
                        <Form.Control
                          autoFocus
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputeChange}
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group id="password">
                      <Form.Label htmlFor="email_id">Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          autoFocus
                          required
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputeChange}
                          placeholder="Your Password"
                        />
                      </InputGroup>
                    </Form.Group>

                    <Row>
                      <Col xs={3}>
                        <Form.Group
                          style={{ marginRight: "5px" }}
                          className="mb-2"
                        >
                          <Form.Label htmlFor="country_code">
                            Country
                          </Form.Label>

                          <Form.Control as="select" custom>
                            <option value="1">+ 91</option>
                            <option value="2">+ 92</option>
                            <option value="3">+ 97</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col xs={9}>
                        <Form.Group
                          style={{ marginLeft: "5px" }}
                          className="mb-2"
                        >
                          <Form.Label htmlFor="mobile_number">
                            Mobile Number
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            className="form-control"
                            inputMode="numeric"
                            maxLength={10}
                            pattern="[0-9]*"
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleInputeChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      type="submit"
                      className="login-btn"
                      onClick={handleSubmit}
                    >
                      Sign Up
                      <FontAwesomeIcon
                        className="login-icon"
                        icon={faArrowRight}
                      />
                    </Button>

                    <div className="register-link">
                      Already have an account?
                      <Link style={{ marginLeft: "10px" }} to="/login">
                        Sign in
                      </Link>
                    </div>

                  </Form>
                </div>
              </Col>
            ) : (
              <Col
                md={7}
                className="p-4 design-element  reg-form-right"

                // style={{ opacity: activeForm === "firm" ? 0 : 1 }}

              >
                <div className="reg-form-header"> Center Sign Up</div>
                <div style={{ marginTop: "10px" }}>
                  <Form>
                    <Row>
                      <Col md={12}>
                        <Form.Group
                          style={{ marginRight: "5px" }}
                          className="mb-2"
                        >
                          <Form.Label htmlFor="first_name">
                            First Name
                          </Form.Label>
                          <Form.Control
                            autoFocus
                            required
                            type="text"
                            name="fullName"

                            value={centerFormData.fullName}
                            onChange={(e) => handleCenterInputChange(e)}

                            placeholder="Center Name"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group id="email">
                      <Form.Label htmlFor="email_id">Email</Form.Label>
                      <InputGroup>
                        <Form.Control
                          autoFocus
                          required
                          type="email"
                          name="email"

                          value={centerFormData.email}
                          onChange={(e) => handleCenterInputChange(e)}

                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group id="password">
                      <Form.Label htmlFor="email_id">Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          autoFocus
                          required
                          type="password"
                          name="password"

                          value={centerFormData.password}
                          onChange={(e) => handleCenterInputChange(e)}

                          placeholder="Your Password"
                        />
                      </InputGroup>
                    </Form.Group>

                    <Row>
                      <Col xs={3}>
                        <Form.Group
                          style={{ marginRight: "5px" }}
                          className="mb-2"
                        >
                          <Form.Label htmlFor="country_code">
                            Country
                          </Form.Label>

                          <Form.Control as="select" custom>
                            <option value="1">+ 91</option>
                            <option value="2">+ 92</option>
                            <option value="3">+ 97</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col xs={9}>
                        <Form.Group
                          style={{ marginLeft: "5px" }}
                          className="mb-2"
                        >
                          <Form.Label htmlFor="mobile_number">
                            Mobile Number
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            className="form-control"
                            inputMode="numeric"
                            maxLength={10}
                            pattern="[0-9]*"
                            placeholder="Mobile Number"

                            value={centerFormData.phone}
                            onChange={(e) => handleCenterInputChange(e)}

                          />
                        </Form.Group>
                      </Col>
                    </Row>


                    <Button
                      type="submit"
                      className="login-btn"
                      onClick={handleSubmit}
                    >

                      Sign Up
                      <FontAwesomeIcon
                        className="login-icon"
                        icon={faArrowRight}
                      />
                    </Button>

                    <div className="register-link">
                      Already have an account?
                      <Link style={{ marginLeft: "10px" }} to="/login">
                        Sign in
                      </Link>
                    </div>

                  </Form>
                </div>
              </Col>
            )}
            <Col md={5} className="p-2 design-element  reg-form-overlay">
              <Row>
                <Col md={12}>
                  <div
                    className={`reg-right-logo ${

                      activeForm === "firm" ? "reg-design-logo" : ""

                    }`}
                  >
                    <h3>Logo</h3>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="reg-right-text">
                    <h3>Welcome to ChildCare Funding.</h3>
                    <p>
                      Learn from the top trainer and give yourself More Text
                      Here
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <div className="reset-text">

              <Link style={{ marginLeft: "10px" }} to="/">
                <svg
                  fill="#000000"
                  width="25px"
                  height="15px"
                  viewBox="0 0 200 250"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M160,89.75H56l53-53a9.67,9.67,0,0,0,0-14,9.67,9.67,0,0,0-14,0l-56,56a30.18,30.18,0,0,0-8.5,18.5c0,1-.5,1.5-.5,2.5a6.34,6.34,0,0,0,.5,3,31.47,31.47,0,0,0,8.5,18.5l56,56a9.9,9.9,0,0,0,14-14l-52.5-53.5H160a10,10,0,0,0,0-20Z" />
                </svg>
                Back to home page
              </Link>

            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
