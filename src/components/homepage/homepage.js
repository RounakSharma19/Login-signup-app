import React from "react";
import "./homepage.css";

const Homepage = ({ setLoginUser }) => {
  return (
    <div className="homepage">
      <h1>Welcome to smartfoodsafe</h1>
      {/* <div className="button" onClick={() => setLoginUser({})}>Logout</div> */}
      <button
        type="button"
        className="btn btn-primary  mx-2 my-3"
        onClick={() => setLoginUser({})}
      >
        Logout
      </button>
    </div>
  );
};
export default Homepage;
