import { AppBar, Avatar, Button, Grid, Toolbar } from "@mui/material";
import React from "react";
import { useApp } from "../utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/constants";

export default function Navigation() {
  const { auth } = useApp();
  const [user] = useAuthState(auth);
  return (
    <AppBar color={"default"} position="static">
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"0 20px"}
      >
        <Avatar
          src={
            user && user.photoURL
              ? user.photoURL
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
          }
        />
        <Toolbar>
          <Grid container justifyContent={"flex-end"}>
            {user ? (
              <Button
                color={"warning"}
                variant={"outlined"}
                onClick={() => {
                  auth.signOut();
                }}
              >
                Log out
              </Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button color={"primary"} variant={"outlined"}>
                  Log in
                </Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </Grid>
    </AppBar>
  );
}
