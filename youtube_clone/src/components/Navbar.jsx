import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={4}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#282828",
        justifyContent: "space-between",
        // p: 4,
        height: "5vh",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
