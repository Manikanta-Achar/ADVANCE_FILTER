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
        <button type="button">
          <FiHeart className="nav-icons" />
        </button>

        <button type="button">
          <AiOutlineShoppingCart className="nav-icons" />
        </button>

        <button type="button">
          <AiOutlineUserAdd className="nav-icons" />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
