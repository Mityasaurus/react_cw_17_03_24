const loginUser = {
  flexDirection: "row-reverse",
  backgroundColor: "#2f70af",
  borderRadius: "20px 20px 0 20px",
};

const otherUser = {
  backgroundColor: "#806491",
  borderRadius: "20px 20px 20px 0",
};

export function styleMessageByUser(messages, user) {
  return messages.current_uid === user.uid ? loginUser : otherUser;
}
