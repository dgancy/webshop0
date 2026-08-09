import React from "react";

export default function Login() {
  return (
    <div>
      <p>Please Login with your account!</p>
      <input type="text" placeholder="Username or Email address" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
