import React from "react";
import "./Header.css";
export default function Header() {
  const handleChange = () => {
    alert("Hello");
  };
  return (
    <header>
      <div className="header_content">
        <h3 className="appName">Anonime</h3>
        <p>Home</p>
        <p>List anime</p>
        <div className="searchInfo">
          <input type="text" placeholder="Search anime or movie" />
        </div>
      </div>
    </header>
  );
}
