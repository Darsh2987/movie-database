import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <h1>Movie Database</h1>
      <form onSubmit={props.handleInputSubmit}>
        <input className="header-search" type="search" placeholder="Search..." onChange={props.handleInputChange} />
      </form>
    </header>
  );
};

export default Header;
