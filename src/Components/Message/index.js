import { Typography } from "@mui/material";

export default function Message({ fromUsername, content, postTitle, id }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        backgroundColor: "white",
        padding: "16px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <p style={{ marginBottom: "16px" }}>
        <b>From: </b>
        {fromUsername}
      </p>
      <Typography variant="body2">{content}</Typography>
      <Typography variant="body2">{postTitle}</Typography>
    </div>
  );
}
