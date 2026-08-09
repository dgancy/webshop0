import React from "react";
import { useNavigate } from "react-router-dom";

export default function OpenPage() {
  const nav = useNavigate();

  const navigateToHome = ()=>{
    nav('/');
  }
  const navigateToLogin = ()=>{
    nav('/login')
  }
  const navigateToRegister = ()=>{
    nav('/register')
  }
  return (
    <body>
      <button onClick={navigateToHome}>Home</button>
      <button onClick={navigateToLogin}>Login</button>
      <button onClick={navigateToRegister}>Register</button>
      <div>
        <p>
          Welcome please <a href="/register">Register</a> if you do not have an account.
          If you already has an account please <a href="/login">Login</a>.
        </p>
      </div>
    </body>
  );
}
