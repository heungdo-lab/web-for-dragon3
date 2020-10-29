import React, { useState, createContext } from "react";

const ScreenContext = createContext([{}, () => {}]);

const ScreenProvider = (props) => {
  const [state, setState] = useState({
    screenSize: "web",
  });

  return (
    <ScreenContext.Provider value={[state, setState]}>
      {props.children}
    </ScreenContext.Provider>
  );
};

export { ScreenContext, ScreenProvider };
