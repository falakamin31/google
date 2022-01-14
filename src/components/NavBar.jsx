import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = (props) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
      <Link to="/">
        <img
          className="h-8 hover:shadow-sm rounded-sm"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="Google logo"
        />
      </Link>
      <button
        className="text-xl dark:bg-gray-50 dark:text-gray-900 border bg-white rounded-full px-2 py-1 hover:shadow-lg mb-2"
        onClick={() => props.setDarkTheme(!props.darkTheme)}
      >
        {props.darkTheme ? `Light ☀️` : "Dark 🌚"}
      </button>
      </div>
      <Search/>
    </div>
  );
};

export default NavBar;
