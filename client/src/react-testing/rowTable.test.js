import { render } from "@testing-library/react";
import RowTable from "./../components/table-tickers/rowTable";
const testData = {
  ticker: "TSL",
  exchange: "NASDAQ",
  price: {
    status: true,
    value: 10,
  },
  change: { status: true, value: "123" },
  change_percent: { status: true, value: "123" },
  dividend: { status: true, value: "123" },
  yieldData: { status: true, value: "123" },
};

test("test row table", () => {
  render(<RowTable props={testData} />);
});
