import { Avatar, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { parseFirebaseTime } from "./../utils/formatDate";
import { styleMessageByUser } from "../utils/alignMessage";
import { useApp } from "../utils/context";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Message({ messages }) {
  // console.log(messages);
  const { auth } = useApp();
  const [user] = useAuthState(auth);

  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      style={{
        width: "80%",
        height: "80vh",
        backgroundColor: "#fafafa",
        overflowY: "auto",
        borderRadius: 10,
      }}
    >
      {messages.map(({ photoUrl, displayName, text, createdAt }, index) => (
        <div
          key={createdAt}
          ref={index === messages.length - 1 ? messagesEndRef : null}
        >
          <Grid
            container
            key={createdAt}
            alignItems={"center"}
            flexDirection={
              styleMessageByUser(messages[index], user).flexDirection
            }
          >
            <Avatar src={photoUrl} />
            <Grid
              container
              color="white"
              style={{
                width: "auto",
                backgroundColor: `${
                  styleMessageByUser(messages[index], user).backgroundColor
                }`,
                margin: "0 10px 10px 10px",
                maxWidth: "30%",
                borderRadius: `${
                  styleMessageByUser(messages[index], user).borderRadius
                }`,
                padding: "10px",
              }}
            >
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {displayName}
                </p>
                <p style={{ fontSize: "11px", fontWeight: "600" }}>
                  {parseFirebaseTime(createdAt)}
                </p>
              </Grid>
              <p>{text}</p>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
}
