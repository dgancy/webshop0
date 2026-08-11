import React, { useState } from "react";

export default function Register() {
  let [userName, SetUserName] = useState("");
  let [eMail, SetEmail] = useState("");
  let [passWord, SetPassword] = useState("");

  function GatherData() {
    const dataToBack = { userName, eMail, passWord };

    console.log(dataToBack);
  }

  return (
    <div>
      <p>Please Register an account!</p>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={userName}
        onChange={(e) => SetUserName(e.target.value)}
      />
      <input
        type="text"
        id="email"
        placeholder="Email"
        value={eMail}
        onChange={(e) => SetEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={passWord}
        onChange={(e) => SetPassword(e.target.value)}
      />
      <button onClick={GatherData}>Register</button>
    </div>
  );
}
