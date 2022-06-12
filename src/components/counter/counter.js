import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementCounter,
  IncrementCounter,
} from "../../actions/counterAction";
import { GetCountValue } from "../../selectors/counter";
import { GetTheme } from "../../selectors/navigation";
import Button from "@material-ui/core/Button";
import "./counter.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const countValue = useSelector(GetCountValue);
  const theme = useSelector(GetTheme);
  const handleIncrement = () => {
    dispatch(IncrementCounter());
  };
  const handleDecrement = () => {
    dispatch(DecrementCounter());
  };
  return (
    <div
      className={`p-4 d-flex my-3 flex-column justify-content-between counterContainer ${
        theme ? "buttonStyleDark" : "buttonStyleLight"
      }`}
    >
      <div className="text-center counterStyle mt-4">{countValue}</div>
      <div className="justify-content-center d-flex flex-row ">
        <Button
          variant="contained"
          size="large"
          onClick={handleIncrement}
          className="buttonValue d-inline-block mx-2"
        >
          +
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={handleDecrement}
          className="buttonValue d-inline-block mx-2"
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default Counter;
