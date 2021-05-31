import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkSocked } from "./redux/action";
import Loader from "./components/loader/loader";
import TableTickers from "./components/table-tickers/tableTickers ";

const App = () => {
  const dispatch = useDispatch();
  const store = useSelector((s) => s);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(store);
  }, [store]);
  useEffect(() => {
    dispatch(thunkSocked());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {data === null ? <Loader /> : <TableTickers />}
    </div>
  );
};
export default App;
