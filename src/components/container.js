import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />

          <p>
            img elements must have an alt prop, either with meaningful text, or
            an empty string
          </p>
        </Container>
      </React.Fragment>
    </div>
  );
}
