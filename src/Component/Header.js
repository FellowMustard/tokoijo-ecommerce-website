import React, { useState } from "react";
import Logo from "../Logo/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { BsGlobe, BsBellFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="top">
          <a
            href="https://www.tokopedia.com/"
            target="_blank"
            className="link-unformatter"
          >
            <BsGlobe />
            <p>The main source of inspiration</p>
          </a>
        </div>
        <div className="header">
          {/* logo */}
          <Link to="/" className="image-container">
            <img
              className="header-logo"
              src={Logo}
              alt="hmm that's weird, just pretend that its a million dollar company logo"
            />
          </Link>
          {/* search */}
          <div className="header-search">
            <input
              type="text"
              className="header-search-input"
              placeholder="find something..."
            />
            <ImSearch className="header-search-icon" />
          </div>

          {/* 3 icon */}
          <div className="icon-container">
            <Link to="/checkout" className="link-unformatter-icon">
              <MdShoppingCart className="header-icon" />
            </Link>
            <BsBellFill className="header-icon" />
            <IoMdMail className="header-icon" />
          </div>
          {/* username */}

          <Link to="/login" className="user-container">
            <div className="user-container-button">
              <FaUserCircle className="avatar-icon" />
              <span className="username">User</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
