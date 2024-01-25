import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Question from "./Question";
import Error from "./Error";
import ThankYou from "./ThankYou";
import { Typography } from "@mui/material";
import feedbackImg from "../assets/feedback-icon.png";

const apiUrl =
  "https://brijfeedback.pythonanywhere.com/api/get-feedback-questions/?format=json&unitID=1";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedData: {},
      feedback: {
        questions: [],
        choices: [],
      },
      isLoading: false,
      isError: false,
      isSubmitted: false,
    };
  }

  async fetchFeedbackData() {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      this.setState({ isLoading: false });

      const { feedbackQuestions: questions, choices } = data;
      const initialChoices = Array(choices.length).fill("");
      this.setState({
        fetchedData: data,
        feedback: {
          questions,
          choices: initialChoices,
        },
      });
    } catch (error) {
      console.log(error.message);
      this.setState({ isError: true });
    }
  }

  componentDidMount() {
    this.fetchFeedbackData();
  }

  handleChoiceChange = (index, choice) => {
    const newChoices = [...this.state.feedback.choices];
    newChoices[index] = choice;
    this.setState((prevState) => ({
      feedback: {
        ...prevState.feedback,
        choices: newChoices,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.feedback.choices.some((el) => el === "")) {
      toast.error("Please fill out all fields");
      return;
    }
    this.setState({ isSubmitted: true });
  };

  render() {
    const { feedbackQuestions: questions, choices } = this.state.fetchedData;
    if (this.state.isError) {
      return <Error />;
    }
    if (this.state.isLoading) {
      return (
        <div className="loading-screen">
          <CircularProgress />
        </div>
      );
    }
    if (this.state.isSubmitted) {
      return <ThankYou userData={this.state.feedback} />;
    }

    return (
      <>
        <div className="header">
          <img src={feedbackImg} style={{ width: "100px" }} />
          <Typography variant="h4" gutterBottom>
            Share Your Feedback with Us
          </Typography>
          <Typography variant="body1">
            Help Us Shine Brighter by Sharing Your opinions!
          </Typography>
        </div>

        <div className="form-container">
          <form id="feedback-form" onSubmit={(e) => this.handleSubmit(e)}>
            {questions &&
              questions.map((question, index) => (
                <Question
                  key={index}
                  questionIndex={index}
                  question={question}
                  onSelect={this.handleChoiceChange}
                  choices={choices}
                />
              ))}
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </div>
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
export default FeedbackForm;
