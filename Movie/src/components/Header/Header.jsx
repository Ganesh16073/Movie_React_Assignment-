import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Header() {
  const [searchName, setSearchName] = useState("");
  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchName.trim()) {
      console.log("Searching for:", searchName); 
    }
  };

  return (
    <header className="bg-gray-800 shadow sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-white text-lg font-bold">
          <Link to="/" className="hover:text-white transition duration-300">
            MovieDb
          </Link>
        </div>

        <ul className="flex ml-20 space-x-6 text-gray-300">
          <li>
            <Link to="/popular" className="hover:text-white transition duration-300">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/toprated" className="hover:text-white transition duration-300">
              Top Rated
            </Link>
          </li>
          <li>
            <Link to="/upcoming" className="hover:text-white transition duration-300">
              Upcoming
            </Link>
          </li>
        </ul>

        <form className="flex items-center space-x-2" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Movie Name"
            value={searchName}
            onChange={handleSearchChange}
            className="px-3 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-gray-700 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-600 hover:text-white transition duration-300"
          >
            <span className="hover:text-white transition duration-300">Search</span>
          </button>
        </form>
      </nav>

      {searchName && <Search searchkey={searchName} />}
    </header>
  );
}

export default Header;
