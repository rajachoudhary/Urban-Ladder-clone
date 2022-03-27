import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LogModal } from "./LogModal";
import styles from "../css/LogIn.module.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch } from "react-redux";
import { logoutApi, socialApi } from "../Redux/User/userApi";

export const LogInButton = ({ id, open, anchorEl, onClose }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const token = useSelector((res) => res.User.token);
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    socialApi()(dispatch);
    if (token !== "") {
      setModalShow(false);
    }
  });
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ width: "150px" }}>
          <List
            sx={{ bgcolor: "background.paper", padding: "0px" }}
            component="nav"
          >
            {token === "" ? (
              <>
                <ListItemButton
                  onClick={() => {
                    setModalShow(true);
                    setLogin(true);
                    onClose();
                  }}
                  sx={{ borderBottom: "1px solid #eee" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ed7745")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                >
                  <ListItemText primary="Log In" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    setModalShow(true);
                    setLogin(false);
                    onClose();
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ed7745")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                >
                  <ListItemText primary="Sign Up" />
                </ListItemButton>
              </>
            ) : (
              <>
                <ListItemButton
                  onClick={() => {
                    onClose();
                  }}
                  sx={{ borderBottom: "1px solid #eee" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ed7745")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                >
                  <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    onClose();
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ed7745")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                >
                  <ListItemText primary="Orders" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    onClose();
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ed7745")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                >
                  <ListItemText primary="Vouchers" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    logoutApi()(dispatch);
                    onClose();
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ed7745")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                >
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </>
            )}
          </List>
        </Typography>
      </Popover>
      <LogModal
        login={login}
        setLogin={setLogin}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
