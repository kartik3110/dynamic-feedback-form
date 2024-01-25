import Alert from "@mui/material/Alert";
import { Component } from "react";

class Error extends Component {
  render() {
    return (
      <Alert
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          fontSize: "1.5rem",
          alignItems: "center",
        }}
        severity="error"
      >
        Something went wrong while trying to fetch the Data. Please try after
        some time.
      </Alert>
    );
  }
}

export default Error;
