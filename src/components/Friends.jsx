import React from "react";
import { Container, Grid, Avatar } from "@mui/material";

export default function Friends({ users }) {
  return (
    <Container maxWidth="xs">
      <Grid container paddingRight={"25%"} justifyContent={"center"}>
        <h3 style={{ margin: "10px 0 5px 0" }}>Chat friends</h3>
        {users.map(({ name, photoUrl }) => (
          <Grid
            container
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"10px"}
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
