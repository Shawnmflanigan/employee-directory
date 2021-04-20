import React from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Form.Control
      type="text"
      placeholder="Search by Name or State"
      value={searchTerm}
      onChange={({ target }) => setSearchTerm(target.value)}
    />
  );
};

export default SearchBar;