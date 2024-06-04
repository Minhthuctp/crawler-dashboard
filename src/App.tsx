import React from "react";
import CrawlerConfiguration from "./pages/CrawlerConfiguration";
import TrainModel from "./pages/TrainModel";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/crawler" element={<CrawlerConfiguration />} />
          <Route path="/train" element={<TrainModel />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
