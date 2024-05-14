import { Form, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import loginimg from "../../assets/images/childcare.png";
import "../../assets/css/Login.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginUserAsync } from "../../features/user/userThunks";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      const response = await dispatch(loginUserAsync(formData));
      if (response.type === "user/login/fulfilled") {
        // alert("login success full");
        toast.success("Login Successfully!");
        navigate("/");
        setLoader(false);
      } else {
        toast.error("Invaild email or password");
        setLoader(false);
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed");
      setLoader(false);
    }
  };

  return (
    <>
      <div className="login-main">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="left-box">
              <div className="left-login-box">
                <h2> Logo </h2>
                <h2> Welcome Back </h2>
                <Form>
                  <Form.Group id="email">
                    <InputGroup>
                      <Form.Control
                        className="input-grp"
                        autoFocus
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password">
                      <InputGroup>
                        <Form.Control
                          autoFocus
                          required
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Your Password"
                        />
                      </InputGroup>
                    </Form.Group>
                  </Form.Group>
                  <div className="keep-me-logged">
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        id="rememberMe"
                        label="Keep me logged in"
                      />
                    </Form.Group>
                    {/* <div>
                      <a href="">Forgot Password</a>
                    </div> */}
                  </div>

                  {!loader ? (
                    <Button
                      type="submit"
                      className="login-btn"
                      onClick={handleSubmit}
                    >
                      Login
                      <FontAwesomeIcon
                        className="login-icon"
                        icon={faArrowRight}
                      />
                    </Button>
                  ) : (
                    <Button type="submit" className="login-btn">
                      Login....
                      <FontAwesomeIcon
                        className="login-icon"
                        icon={faArrowRight}
                      />
                    </Button>
                  )}

                  <div className="register-link">
                    Don’t have an account yet?
                    <Link style={{ marginLeft: "10px" }} to="/register">
                      Sign up
                    </Link>

                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="right-box">
              <div className="right-login-box">
                <div className="right-login-box-detail">
                  <h3>Welcome to ChildCare Funding</h3>
                  <p>Empowering parents to access child care funding easily.</p>

                  <img
                    className="image"
                    src={loginimg}
                    alt="App Illustration"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
