import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 12,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        mr: { sm: 5 },
      }}
    >
      <InputBase
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        label="Search"
      />
      <IconButton type="submit">
        <SearchIcon
          sx={{
            color: "#606060",
            "&:hover": {
              color: "#000",
            },
          }}
        />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
