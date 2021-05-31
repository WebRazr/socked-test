import reducer, { initialState as state } from "../redux/reducer/rootReducer";
import * as types from "../redux/action-type";

describe("reducer", () => {
  it("GET_DATA", () => {
    const action = {
      type: types.GET_DATA,
      data: [
        {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: 279.29,
          change: 64.52,
          change_percent: 0.84,
          dividend: 0.56,
          yield: 1.34,
          last_trade_time: "2021-04-30T11:53:21.000Z",
        },
      ],
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      data: [
        {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: 279.29,
          change: 64.52,
          change_percent: 0.84,
          dividend: 0.56,
          yield: 1.34,
          last_trade_time: "2021-04-30T11:53:21.000Z",
        },
      ],
      arrTransform: null,
    });
  });
  it("GET_DATA if data !== null", () => {
    const action = {
      type: types.GET_DATA,
      data: [
        {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: 279.29,
          change: 64.52,
          change_percent: 0.84,
          dividend: 0.56,
          yield: 1.34,
          last_trade_time: "2021-04-30T11:53:21.000Z",
        },
      ],
    };
    expect(
      reducer(
        {
          ...state,
          data: [
            {
              ticker: "AAPL",
              exchange: "NASDAQ",
              price: 279.29,
              change: 64.52,
              change_percent: 0.84,
              dividend: 0.56,
              yield: 1.34,
              last_trade_time: "2021-04-30T11:53:21.000Z",
            },
          ],
        },
        action
      )
    ).toEqual({
      ...state,
      data: [
        {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: 279.29,
          change: 64.52,
          change_percent: 0.84,
          dividend: 0.56,
          yield: 1.34,
          last_trade_time: "2021-04-30T11:53:21.000Z",
        },
      ],
      arrTransform: [
        {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: { status: true, value: 279.29 },
          change: { status: true, value: 64.52 },
          change_percent: { status: true, value: 0.84 },
          dividend: { status: false, value: 0.56 },
          yieldData: { status: true, value: 1.34 },
        },
      ],
    });
  });
});
