import React, { useState } from "react";
import { Container, Grid, Avatar } from "@mui/material";
import { useApp } from "../utils/context";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Friends({ users }) {
  const { handleSelectUser, auth } = useApp();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [user] = useAuthState(auth);
  const currentUserId = user.uid;
  function handleUserClick(userId) {
    setSelectedUserId(userId);
    handleSelectUser(userId);
  }

  return (
    <Container maxWidth="xs">
      <Grid container paddingRight={"25%"} justifyContent={"center"}>
        <h3 style={{ margin: "10px 0 5px 0" }}>Chat friends</h3>
        {users
          .filter(({ uid }) => uid !== currentUserId)
          .map(({ name, photoUrl, uid }) => (
            <NavLink
              to={"#"}
              key={uid}
              onClick={(e) => {
                e.preventDefault();
                handleUserClick(uid);
              }}
            >
              <Grid
                container
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={"10px"}
                padding={"10px"}
                style={{
                  backgroundColor:
                    uid === selectedUserId
                      ? "rgb(181, 223, 249)"
                      : "transparent",
                }}
              >
                <Avatar src={photoUrl} />
                <Grid
                  bgcolor={"#434e74"}
                  color={"white"}
                  padding={"10px 13px"}
                  borderRadius={"18px"}
                >
                  <p>{name}</p>
                </Grid>
              </Grid>
            </NavLink>
          ))}
      </Grid>
    </Container>
  );
}
