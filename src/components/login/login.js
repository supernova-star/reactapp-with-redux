import React, { useState, useEffect } from "react";
import "./login.scss";
import { useSelector, useDispatch } from "react-redux";
import workImage from "../../assets/image/work1.png";
import workLogo from "../../assets/image/logo.png";
import { useNavigate } from "react-router";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { GetUserList, SetUserInfo } from "../../actions/loginAction";
import { GetLoginDetails } from "../../selectors/login";
import SpinnerSVG from "../../assets/svg/loader.svg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginDetails = useSelector(GetLoginDetails);
  const { spinner, userList } = loginDetails;
  const [userNameInput, setUserNameInput] = useState("Bret");
  const [validUserName, setValidUserName] = useState(true);
  const [emailInput, setEmailInput] = useState("Sincere@april.biz");

  useEffect(() => {
    dispatch(GetUserList());
  }, []);

  const setUserName = (e) => {
    setUserNameInput(e.target.value);
    // const currentUser = userList.filter(
    //   (user) => user.username === userNameInput
    // );
    // if (currentUser.length !== 0) {
    //   setValidUserName(true);
    // }
  };
  const setEmail = (e) => {
    setEmailInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentUser = userList.filter(
      (user) => user.username === userNameInput && user.email === emailInput
    );
    if (currentUser.length !== 0) {
      navigate("./home");
      dispatch(SetUserInfo(currentUser[0]));
      window.sessionStorage.setItem("user", JSON.stringify(currentUser[0]));
    }
  };
  return (
    <>
      {spinner && (
        <div className="d-flex flex-row justify-content-center align-items-center py-5">
          <img src={SpinnerSVG} alt="spinner" className="mt-5" />
        </div>
      )}
      {!spinner && (
        <div className="d-flex flex-row justify-content-center align-items-center p-5 mt-5">
          <div className="loginContainer mt-5 d-flex flex-column">
            <img
              src={workLogo}
              alt="logo"
              width="50"
              height="50"
              className="ms-3 mt-3"
            />
            <div className="d-flex flex-row">
              <img
                src={workImage}
                alt="workImage"
                width="450"
                height="400"
                className="mt-5"
              />
              <div className="loginContent w-100 mt-0 mx-3">
                <h4 className="display-6 welcome">Welcome!</h4>
                <p>Please enter your username and email id to login.</p>
                <form onSubmit={handleSubmit}>
                  <div className="inputWrapper py-2 mt-5">
                    <div className="d-flex flex-row newloginInput pb-2">
                      <FaUser className="emailIcon ms-3 align-self-end mb-1" />
                      <TextField
                        required
                        id="standard-required"
                        label="Username"
                        value={userNameInput}
                        onChange={setUserName}
                        variant="standard"
                        className="ms-3 w-100 pe-3"
                      />
                    </div>
                    <div className=" d-flex flex-row newloginInput pb-2">
                      <FaEnvelope className="emailIcon ms-3 align-self-end mb-1" />
                      <TextField
                        required
                        id="standard-required"
                        label="EmailId"
                        value={emailInput}
                        onChange={setEmail}
                        variant="standard"
                        className="ms-3 w-100 pe-3"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-row mt-5">
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      className="loginButtons w-50 me-2 text-white"
                    >
                      Login
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      className="loginButtons w-50 me-2 text-white"
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/*
             */}
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
