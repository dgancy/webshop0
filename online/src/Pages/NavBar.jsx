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
      <button onClick={navigateToHome}>Home</button>
      <button onClick={navigateToLogin}>Login</button>
      <button onClick={navigateToRegister}>Register</button>
    </div>
  );
}
