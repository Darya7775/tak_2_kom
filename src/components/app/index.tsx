import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../base/layout";
import Main from "../page/main";

import { GlobalStyles } from "./style";
import { GlobalFonts } from "../../fonts/fonts";

const App: React.FC = () => {
  return (
    <HashRouter>
      <GlobalFonts />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
