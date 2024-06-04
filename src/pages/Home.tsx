import React from "react";
import SlideNav from "../components/SlideNav";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SlideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>
        </Box>
      </Box>
    </>
  );
}
