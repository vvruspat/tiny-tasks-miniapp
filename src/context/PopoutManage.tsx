import React, { FC, createContext, useState, ReactNode, useEffect } from "react";

type PopoutManageContextProps = {
  popout: ReactNode | null;
  setPopout: Function;
};

export const PopoutManageConext = createContext<PopoutManageContextProps>({
  popout: null,
  setPopout: () => {},
});

const PopoutManage: FC = ({ children }) => {
  const [popout, setPopout] = useState<ReactNode | null>(null);

  return (
    <PopoutManageConext.Provider value={{popout, setPopout}}>
      {children}
    </PopoutManageConext.Provider>
  );
};

export default PopoutManage;
