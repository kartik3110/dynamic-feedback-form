import FeedbackForm from "./FeedbackForm";
import { render } from "../../test-utils";
import { describe, it } from "vitest";

describe("FeedbackForm Component", () => {
  it("renders without crashing", () => {
    render(<FeedbackForm />);
  });
});
