import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/base/layout/layout";
import Main from "/src/components/page/main/main";

import { GlobalStyles } from "./style";
import { GlobalFonts } from "/src/fonts/fonts";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalFonts />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
