import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { Withdrawl, deposit } from "./state/action-creators";

const Shop = () => {
  const dispatch = useDispatch();

  //udsing bindActionCreators
  const /*actions*/ { Withdrawl, deposit } = bindActionCreators(
      actionCreators,
      dispatch
    );
  return (
    <div>
      {/* //method one */}
      {/* <h2>Deposit/Withdrawl</h2>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(actionCreators.Withdrawl)}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary"
        onClick={() => dispatch(actionCreators.deposit)}
      >
        +
      </button> */}
      {/* method 2 */}
      <button className="btn btn-primary" onClick={() => Withdrawl(100)}>
        -
      </button>
      Update Balance
      <button className="btn btn-primary" onClick={() => deposit(100)}>
        +
      </button>
    </div>
  );
};

export default Shop;
