import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { useApp } from "../utils/context";
import { addUserDB } from "../utils/saveUserData";

export default function Login() {
  const { firebase, auth, users } = useApp();

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
    if (users.find(({ uid }) => user.uid === uid) === undefined) {
      addUserDB(user);
    }
  };

  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          style={{ width: 400, background: "#fafafa", borderRadius: 15 }}
        >
          <Box p={5}>
            <Button color={"warning"} variant={"outlined"} onClick={login}>
              Log in with{" "}
              <img
                style={{ marginLeft: "10px" }}
                width={17}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                alt=""
              />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
