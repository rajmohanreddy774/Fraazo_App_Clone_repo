import React from "react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./Login.css"

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 400,
    width: 420,
    bgcolor: "background.paper",
    outline: 0,
    boxShadow: 24,
    p: 6,
    borderRadius: "20px",
  };

const Login = () => {
  return (
    <div>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Welcome to Fraazo!
          </Typography>
          <Typography id="modal-modal-title" variant="p" component="p">
            Sign In to track your Order and More.
          </Typography>
        
            <>
              <TextField
                label="Enter Email"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="email"
                type="email"
                sx={{ mt: 4, width: "100%" }}
              />
              <TextField
                label="Enter Password"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="password"
                type="password"
                sx={{ mt: 3, width: "100%" }}
              />
            </>
         
            <>
              <TextField
                label="Fist Name"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="firstName"
                sx={{ mt: 4, width: "100%" }}
              />
              <TextField
                label="Enter Last Name"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="lastName"
                sx={{ mt: 3, width: "100%" }}
              />{" "}
              <TextField
                label="Enter your Email"
                id="standard-size-normal"
                variant="standard"
                color="success"
                  name="email"
                  type="email"
                sx={{ mt: 3, width: "100%" }}
              />
              <TextField
                label="Enter your Password"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="password"
                type="password"
                sx={{ mt: 3, width: "100%" }}
              />
              <TextField
                label="Enter your Phone"
                id="standard-size-normal"
                variant="standard"
                color="success"
                name="phone"
                sx={{ mt: 3, width: "100%" }}
              />
            </>
          
          <Box
            sx={{ mt: 2, cursor: "pointer" }}
          >
            <Typography id="modal-modal-title" variant="p" component="p">
                ? "New to Fraazo.!  Click here to Create Your Account...!"
                : "Already Have Account.!  Click here for SignIn..!"
            </Typography>
          </Box>
          <div style={{ textAlign: "center", mt: 2 }}>
            
              <Button
                variant="contained"
                color="success"
                sx={{
                  mt: 3,
                  width: "200px",
                  borderRadius: "50px",
                  pt: 2,
                  pb: 2,
                }}
              >
                Create Account
              </Button>
            
              <Button
                variant="contained"
                color="success"
                sx={{
                  mt: 3,
                  width: "200px",
                  borderRadius: "50px",
                  pt: 2,
                  pb: 2,
                }}>
                LOGIN
              </Button>
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Login
