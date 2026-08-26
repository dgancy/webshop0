import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrdersData() {
    const nav = useNavigate();

const NavigateToFinalise = () =>{
    nav("/ordersummary");
}

  return (
    <form>
      <div>
        <input placeholder="FullName" className="inputNormal" type="string"/>
        <input placeholder="Email" className="inputNormal" type="string"/>
        <input placeholder="Phone Number" className="inputNormal" type="string"/>
        <input placeholder="Location" className="inputNormal" type="string"/>
      </div>
      <div>
        <button onClick={NavigateToFinalise}>Continue</button>
      </div>
    </form>
  );
}
