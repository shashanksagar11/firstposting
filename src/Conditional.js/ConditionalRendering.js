import React from "react";


//// CoditionalRendering by using Ternary opertaor

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? (
          <h1>Welcome back!</h1>
        ) : (
          <h1>Please sign up.</h1>
        )}
      </div>
    );
  }
  export default Greeting