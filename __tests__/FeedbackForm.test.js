import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FeedbackForm from "../src/components/FeedbackForm";

describe("FeedbackForm Component", () => {
  it("renders without crashing", () => {
    render(<FeedbackForm />);
  });

  it("fetches data and renders questions", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => ({
        feedbackQuestions: ["Question 1", "Question 2"],
        choices: [
          ["Option A", "Option B"],
          ["Option C", "Option D"],
        ],
      }),
    });

    const { getByText, getByLabelText } = render(<FeedbackForm />);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    expect(getByText("Question 1")).toBeInTheDocument();
    expect(getByText("Question 2")).toBeInTheDocument();

    expect(getByLabelText("Option A")).toBeInTheDocument();
    expect(getByLabelText("Option B")).toBeInTheDocument();
    expect(getByLabelText("Option C")).toBeInTheDocument();
    expect(getByLabelText("Option D")).toBeInTheDocument();
  });

  it("handles form submission", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => ({
        feedbackQuestions: ["Question 1", "Question 2"],
        choices: [
          ["Option A", "Option B"],
          ["Option C", "Option D"],
        ],
      }),
    });

    const { getByText, getByLabelText } = render(<FeedbackForm />);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    fireEvent.click(getByLabelText("Option A"));
    fireEvent.click(getByLabelText("Option C"));

    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(getByText("Thank You for Your Feedback!")).toBeInTheDocument()
    );
  });
});
