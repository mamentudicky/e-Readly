/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom

const Header = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk menangani pencarian
  const handleSearch = () => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const matchedContent = props.contents.filter((content) =>
      content.toLowerCase().includes(lowercasedQuery)
    );
    console.log("Hasil pencarian:", matchedContent);

    // Anda dapat menampilkan hasil di komponen lain
    if (matchedContent.length > 0) {
      alert(`Hasil pencarian ditemukan: ${matchedContent.join(", ")}`);
    } else {
      alert("Tidak ada hasil yang cocok.");
    }
  };

  return (
    <div>
      <div className="header_section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Logo */}
          <Link className="logo" to="/"> {/* Gunakan Link dengan atribut 'to' */}
            <img src="/images/e-Readly.PNG" alt="e-Readly Logo" />
          </Link>

          {/* Burger Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Dropdown Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/discussion">
                  Discussion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/publish">
                  Publish
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="search-bar">
              <input
                type="text"
                className="form-control"
                placeholder="Cari konten..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
