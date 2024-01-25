import { Component } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

class ThankYou extends Component {
  render() {
    const feedbackData = { feedback: this.props.userData };
    console.log(feedbackData);
    return (
      <div>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <CheckCircleIcon sx={{ fontSize: "5rem", color: "green" }} />
          <Typography variant="h4" gutterBottom>
            Thank You for Your Feedback!
          </Typography>
          <Typography variant="body1">
            We appreciate your valuable input. Your feedback helps us improve.
          </Typography>
        </div>

        <Paper elevation={3} className="code-paper">
          <Typography variant="h6" gutterBottom>
            User Feedback Data
          </Typography>
          <Typography
            component="pre"
            style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
          >
            {JSON.stringify(feedbackData, null, 2)}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default ThankYou;
