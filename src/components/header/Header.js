import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
const Header = ({ handleToogleSidebar }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToogleSidebar()}
      />
      <img
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c545.png"
        alt="header_logo"
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search " />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://www.shareicon.net/data/256x256/2016/09/15/829459_man_512x512.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
