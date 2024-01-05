import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaUser,
  FaPlus,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
import Filter from "./filter";
import Add from "../pages/add";
import Profile from "../pages/profile";
import categories from "../data/category";
import { useAuth } from "../context/authcontext";

const Header = ({ onSearch }) => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showProfile, setShowProfile] = useState(false);


  const handleProfileButtonClick = () => {
    setShowProfile(true);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilterButtonClick = () => {
    setShowFilter(!showFilter);
  };

  const handleAddButtonClick = () => {
    setShowAdd(!showAdd);
  };

  const handleFilterApply = (filterOptions) => {
    onSearch({
      term: searchTerm,
      ...filterOptions,
    });
    setShowFilter(false);
  };

  // Function to handle adding a new item
  const handleAddItem = (itemDetails) => {
    // Implement logic to add the new item
    console.log("Adding new item:", itemDetails);
    // Close the add item popup
    setShowAdd(false);
  };

  return (
    <header className="py-3" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-1">
            <img src="/black-logo.png" alt="Logo" height="70" />
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <div className="input-group">
                {/* Category Dropdown */}
                <select className="form-control">
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {/* Search Input */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "300px" }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Search Button */}
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary btn-lg"
                    type="button"
                    onClick={handleSearch}
                    style={{
                      borderLeft: "none",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center">
            <FaMapMarkerAlt className="mr-5" style={{ color: "white" }} />
            <span style={{ color: "white" }}>{ user.address}</span>
          </div>

          <div className="col-md-1">
            <button
              className="btn btn-outline-secondary btn-lg"
              type="button"
              onClick={handleFilterButtonClick}
            >
              <FaFilter />
            </button>
            {showFilter && (
              <Filter
                showFilter={showFilter}
                onClose={() => setShowFilter(false)}
                onApply={handleFilterApply}
              />
            )}
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-outline-secondary btn-lg"
              type="button"
              onClick={handleAddButtonClick}
            >
              <FaPlus />
            </button>
            {showAdd && (
              <Add
                showAdd={showAdd}
                onClose={() => setShowAdd(false)}
                onAdd={handleAddItem}
              />
            )}
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-outline-secondary btn-lg"
              type="button"
              onClick={handleProfileButtonClick}
            >
              <FaUser />
            </button>
            {showProfile && (
              <Profile
                showProfile={showProfile}
                onClose={() => setShowProfile(false)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
