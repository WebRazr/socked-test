import { GET_DATA } from "./action-type";
import socket from "./../socked";

export function getData(data) {
  return {
    type: GET_DATA,
    data,
  };
}
//// thunk
export function thunkSocked() {
  return (dispatch) => {
    socket.emit("start");
    socket.on("ticker", (e) => {
      dispatch(getData(e));
    });
  };
}
