import React from "react";
import { Container, Grid, Avatar } from "@mui/material";

export default function Friends({ users }) {
  return (
    <Container>
      <Grid container width={"20vw"}>
        {users.map(({ name, photoUrl }) => (
          <Grid
            container
            alignItems={"center"}
            gap={"10px"}
            border={"1px solid black"}
            borderRadius={"10px"}
            padding={"10px"}
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
        ))}
      </Grid>
    </Container>
  );
}
