import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import Message from "./Message";
import { useApp } from "../utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import Friends from "./Friends";

export default function Chat() {
  const [value, setValue] = useState("");
  const { auth, firebase, firestore, users } = useApp();
  const [user] = useAuthState(auth);
  console.log(user);

  //хук отримання повідомлень

  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  if (loading) {
    return <Loader />;
  }

  //Відправка повідомлень
  const sendMessage = async () => {
    const message = {
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    const chatsCollection = firestore.collection("chats");
    const chatRef = chatsCollection.doc();
    chatRef.set({ users: ["uid_1", "uid_2"], newMessage: message });

    firestore.collection("messages").add(message);

    setValue("");
  };

  return (
    <Container>
      <Grid container flexWrap={"nowrap"} width={"80vw"}>
        <Friends users={users} />
        <Grid
          container
          justifyContent={"center"}
          alignContent={"flex-start"}
          style={{ height: window.innerHeight - 75, marginTop: "10px" }}
        >
          <Message messages={messages} />
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            style={{
              width: "80%",
              marginTop: "20px",
              backgroundColor: "#fafafa",
            }}
          >
            <TextField
              variant={"outlined"}
              maxRows={2}
              style={{ width: "80%" }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button
              variant={"contained"}
              style={{ marginLeft: "8px", width: "18%", height: "100%" }}
              onClick={sendMessage}
            >
              SEND
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
