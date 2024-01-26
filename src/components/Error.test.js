import { render } from "../../test-utils.js";
import Error from "./Error.jsx";

it("renders without crashing", () => {
  render(<Error />);
  console.log("Error page rendered");
});
