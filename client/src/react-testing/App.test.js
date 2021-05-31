import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import storeS from "../redux/store";
import App from "../App";

test("renders learn react link", () => {
  render(
    <Provider store={storeS}>
      <App />
    </Provider>
  );
});
