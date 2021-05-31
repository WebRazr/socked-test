import { GET_DATA } from "./../action-type";
export const initialState = {
  data: null,
  arrTransform: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      const createObj = (oldObj, newObj) => {
        return {
          ticker: newObj.ticker,
          exchange: newObj.exchange,
          price: {
            status: +oldObj.price <= +newObj.price ? true : false,
            value: newObj.price,
          },
          change: {
            status: +oldObj.change <= +newObj.change ? true : false,
            value: newObj.change,
          },
          change_percent: {
            status:
              +oldObj.change_percent <= +newObj.change_percent ? true : false,
            value: newObj.change_percent,
          },
          dividend: {
            status: +oldObj.divident <= +newObj.dividend ? true : false,
            value: newObj.dividend,
          },
          yieldData: {
            status: +oldObj.yield <= +newObj.yield ? true : false,
            value: newObj.yield,
          },
        };
      };
      let createArr;
      if (state.data !== null) {
        createArr = state.data.map((oldObj) => {
          const singlObj = action.data.filter((newObj) => {
            return newObj.ticker === oldObj.ticker;
          })[0];

          return createObj(oldObj, singlObj);
        });
      } else {
        createArr = null;
      }

      return {
        ...state,
        data: action.data,
        arrTransform: createArr,
      };

    default:
      return state;
  }
}
