import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
  });

    // The initial screen should display the current account balance
    it('should display current account balance on initial screen', () => {
        const root = document.createElement('div');
        ReactDOM.render(<App />, root);
        const balanceElement = root.querySelector('.atm-screen h2');
        expect(balanceElement.textContent).toBe('0');
      });

});

