import React, { useState } from "react";

export default function Register() {
  let [userName, SetUserName] = useState("");
  let [eMail, SetEmail] = useState("");
  let [passWord, SetPassword] = useState("");

  async function GatherData() {
    const dataToBack = { userName, eMail, passWord };

    console.log(dataToBack);

    const response = await fetch("http://localhost:5000/register", {
      //await because needs time to catch up, so need to wait the answer.
      method: "POST", //method set
      headers: {
        "Content-Type": "application/json", //prepare the backend to receive json format
      },
      body: JSON.stringify(dataToBack), //render to json format
    });
    console.log(response);
  }

  /*
GET    → adat lekérése
POST   → új adat küldése/létrehozása
PUT    → adat teljes módosítása
PATCH  → adat részleges módosítása
DELETE → adat törlése
*/

  return (
    <form style={{ background: "black", color: "white", height: "100vh" }}>
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
        <div>
          <button
            style={{
              border: "none",
              padding: "15px 32px",
              display: "inline-block",
              margin: "4px 2px",
              cursor: "pointer",
              color: "black",
            }}
            onClick={GatherData}
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
}
