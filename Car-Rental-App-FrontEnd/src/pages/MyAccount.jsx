import React, { useState } from "react";
import "./MyAccountCss.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_logout } from "../redux/Auth/Auth.actionType";

const MyAccount = () => {
  const { name } = useSelector((state) => state.auth);
  const [users, setUsers] = useState("");
  const [wallet, setWallet] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCloseClick = () => {
    navigate("/");
  }
  const handleLogout = () => {
    dispatch({ type: auth_logout });
    navigate("/"); 
  };
  
  return (
    <div className="motherBox">
      <IoIosCloseCircleOutline onClick={handleCloseClick} size={40} style={{ marginRight: '10px', borderRadius: '50px', position: 'absolute', right: '0px', backgroundColor: 'white' }}></IoIosCloseCircleOutline>
      <div className="child">
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "25px",
              borderBottom: "1px solid",
              height: "50px",
            }}
          >
            MY ACCOUNT
          </h1>
        </div>

        <div className="card1">
          <div
            style={{
              fontSize: "18px",
              borderBottom: "1px solid",
              paddingBottom: "10px",
              paddingTop: "20px",
            }}
          >
            Account Details
          </div>
          <div style={{ display: "flex", gap: "100px" }}>
            <p>Email</p>
            <p>{user.email}email@gmail.com</p>
          </div>
          <div style={{ display: "flex", gap: "100px" }}>
            <p>Mobile*</p>
            <input
              style={{ border: "1px solid" }}
              type="text"
              value={user.mobile}
            />
          </div>
        </div>

        <div className="card2">
          <div
            style={{
              fontSize: "18px",
              borderBottom: "1px solid",
              paddingBottom: "10px",
              paddingTop: "20px",
            }}
          >
            Personal Details
          </div>
          <div style={{ display: "flex", gap: "100px" }}>
            <p>Name</p>
            <p>{name}</p>
          </div>
          <div style={{ display: "flex", gap: "100px" }}>
            <p>Gender</p>
            <select name="" id="">
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
        </div>
        <div className="card2">
          <div
            style={{
              fontSize: "18px",
              borderBottom: "1px solid",
              paddingBottom: "10px",
              paddingTop: "20px",
            }}
          >
            Location Details
          </div>
          <div style={{ display: "flex", gap: "100px" }}>
            <p>Please share your current city for optimized experience</p>
          </div>
          <div style={{ display: "flex", gap: "100px" }}>
            <p>City</p>
            <select name="" id="">
              <option value="">Chennai</option>
              <option value="">Hyderabad</option>
            </select>
          </div>
          <div className="logout-btn">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;