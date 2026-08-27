import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrdersData() {
  const nav = useNavigate();

  const [userData, setUserData] = useState({
    fullName: "",
    mail: "",
    phoneNumber: "",
    location: "",
  });

  const NavigateToFinalise = async (e) => {
    e.preventDefault();
    console.log("UserData:", userData);

    try {
      const response = await fetch("http://localhost:5000/userdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response);
    } catch (error) {
      console.log("Hiba", error);
    }

    nav("/ordersummary");
  };

  return (
    <form onSubmit={NavigateToFinalise}>
      <div>
        <input
          placeholder="FullName"
          className="inputNormal"
          type="string"
          id="FullNameId"
          value={userData.fullName}
          onChange={(e) =>
            setUserData({
              ...userData,
              fullName: e.target.value,
            })
          }
        />
        <input
          placeholder="Email"
          className="inputNormal"
          type="string"
          id="EmailId"
          value={userData.mail}
          onChange={(e) =>
            setUserData({
              ...userData,
              mail: e.target.value,
            })
          }
        />
        <input
          placeholder="Phone Number"
          className="inputNormal"
          type="string"
          id="PhoneNumberId"
          value={userData.phoneNumber}
          onChange={(e) =>
            setUserData({
              ...userData,
              phoneNumber: e.target.value,
            })
          }
        />
        <input
          placeholder="Location"
          className="inputNormal"
          type="string"
          id="LocationId"
          value={userData.location}
          onChange={(e) =>
            setUserData({
              ...userData,
              location: e.target.value,
            })
          }
        />
      </div>
      <div>
        <button type="submit">Continue</button>
      </div>
    </form>
  );
}
