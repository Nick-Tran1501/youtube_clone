import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "90vh" },
        flexDirection: { md: "column" },
        scrollBehavior: "smooth",
        overflowX: { sx: "auto", md: "hidden" },
      }}
      gap={1}
    >
      {categories.map((category, index) => (
        <Button
          key={index}
          variant="text"
          startIcon={category.icon}
          className="category-btn"
          sx={{
            p: 2,
            background:
              category.name === selectedCategory ? "#fc1503 " : "transparent",
            color: "#FFFFFF",
            transition: "ease 0.3s",
            opacity: category.name === selectedCategory ? 1 : 0.6,
            "&:hover": {
              opacity: 1,
            },
          }}
          onClick={() => {
            setSelectedCategory(category.name);
          }}
        >
          <Typography>{category.name}</Typography>
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;
