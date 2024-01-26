import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

function customRender(ui, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };

// import { afterEach, render as vitestRender } from "vitest";
// import { cleanup } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// afterEach(() => {
//   cleanup();
// });

// function customRender(ui, options = {}) {
//   return vitestRender(ui, {
//     // wrap provider(s) here if needed
//     wrapper: ({ children }) => children,
//     ...options,
//   });
// }

export * from "@testing-library/react";
export { userEvent };
// override render export
export { customRender as render };
