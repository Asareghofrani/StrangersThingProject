import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { deletePost } from "../../../api.js";

export default function Post({
  name,
  seller,
  price,
  description,
  location,
  id,
  loggedInUsername,
  isUserLoggedIn,
  fetchNewPosts,
}) {
  const handleDelete = async (e) => {
    try {
      const response = await deletePost(id, localStorage.getItem("token"));
    } catch (e) {
      console.log(e);
    }
    await fetchNewPosts();
  };

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
      <Typography variant="h4" sx={{ marginBottom: "8px" }}>
        {name}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#707070" }}>
        {description}
      </Typography>
      <p>
        <b>Price: </b>
        {price}
      </p>
      <p>
        <b>Seller: </b>
        {seller}
      </p>
      <p style={{ marginBottom: "32px" }}>
        <b>Location: </b>
        {location}
      </p>
      {/* <link to={'/posts/${e.seller}'}> view post</link> */}
      {(localStorage.getItem("token") != undefined || isUserLoggedIn) &
      (loggedInUsername !== seller) ? (
        <Button variant="outlined" sx={{ color: "purple" }}>
          SEND MESSAGE
        </Button>
      ) : null}
      {loggedInUsername === seller ? (
        <Button
          onClick={handleDelete}
          variant="outlined"
          sx={{ color: "purple" }}
        >
          DELETE POST
        </Button>
      ) : null}
    </div>
  );
}
