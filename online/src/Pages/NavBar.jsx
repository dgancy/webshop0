import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const nav = useNavigate();

  const navigateToHome = () => {
    nav("/");
  };
  const navigateToLogin = () => {
    nav("/login");
  };
  const navigateToRegister = () => {
    nav("/register");
  };

  return (
    <div>
      <button style={{
              border: "none",
              padding: "15px 32px",
              display: "inline-block",
              margin: "4px 2px",
              cursor: "pointer",
              color: "black",
            }} onClick={navigateToHome}>Home</button>
      <button style={{
              border: "none",
              padding: "15px 32px",
              display: "inline-block",
              margin: "4px 2px",
              cursor: "pointer",
              color: "black",
            }} onClick={navigateToLogin}>Login</button>
      <button style={{
              border: "none",
              padding: "15px 32px",
              display: "inline-block",
              margin: "4px 2px",
              cursor: "pointer",
              color: "black",
            }} onClick={navigateToRegister}>Register</button>
    </div>
  );
}
