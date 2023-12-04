import React, { memo } from "react";

import MainBlock from "../../../components/blocks/main_block";

const Main: React.FC = () => {
  return (
    <main>
      <MainBlock />
    </main>
  );
}

export default memo(Main);
