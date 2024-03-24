import { AppBar, Button, Grid, Toolbar } from "@mui/material";
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
    </AppBar>
  );
}
