import React, { useState } from "react";

export default function Login() {
  let [userName, SetUserName] = useState("");
  let [passWord, SetPassword] = useState("");

  /*function GatherData() {
    const dataToBack = { userName, passWord };

    console.log(dataToBack);
  }*/

  return (
    <form style={{ background: "black", color: "white", height: "100vh" }}>
      <div>
        <p>Please Login with your account!</p>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={userName}
          onChange={(e) => SetUserName(e.target.value)}
        />{" "}
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={passWord}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <button>Login</button>
      </div>
    </form>
  );
}
