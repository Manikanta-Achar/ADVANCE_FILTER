import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";

function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="search-input"
          placeholder="Enter your search shoes."
        />
      </div>

      <div className="profile-container">
        <a href="/men">
          <FiHeart className="nav-icons" />
        </a>
        <a href="/women">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="/kids">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
