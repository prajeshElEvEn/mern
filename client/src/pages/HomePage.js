import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { onConnect } from "../features/connection/connectionSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(onConnect());
  };
  return (
    <Container>
      <Stack display={"block"} spacing={2}>
        <Typography variant="h6">
          Click on the button to connect to server
        </Typography>
        <Button variant="contained" onClick={handleSubmit}>
          Connect to Server
        </Button>
      </Stack>
    </Container>
  );
};

export default HomePage;
