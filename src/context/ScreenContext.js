import React, { useState, createContext } from "react";

import { WEB } from "../constants/strings";

const ScreenContext = createContext([{}, () => {}]);

const ScreenProvider = (props) => {
  const [state, setState] = useState({
    screenSize: WEB,
  });

  return (
    <ScreenContext.Provider value={[state, setState]}>
      {props.children}
    </ScreenContext.Provider>
  );
};

export { ScreenContext, ScreenProvider };
