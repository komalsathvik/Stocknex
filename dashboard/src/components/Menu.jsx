import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfile, setIsProfile] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/user", { withCredentials: true })
      .then((res) => {
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
      });
  }, []);

  function handleSelectedMenu(index) {
    setSelectedMenu(index);
  }

  function handleIsProfile(index) {
    setIsProfile(!isProfile);
  }

  const menu = "menu";
  const active = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleSelectedMenu(0)}>
              <p className={selectedMenu === 0 ? active : menu}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleSelectedMenu(1)}>
              <p className={selectedMenu === 1 ? active : menu}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleSelectedMenu(2)}>
              <p className={selectedMenu === 2 ? active : menu}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleSelectedMenu(3)}>
              <p className={selectedMenu === 3 ? active : menu}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleSelectedMenu(4)}>
              <p className={selectedMenu === 4 ? active : menu}>Funds</p>
            </Link>
          </li>
          <li>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleIsProfile}>
          <div className="avatar" style={{ marginTop: "-20px" }}>
            {username ? username.slice(0, 2).toUpperCase() : "U"}
          </div>
          <p className="username" style={{ marginTop: "-10px" }}>{username}</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
