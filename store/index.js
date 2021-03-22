import React, { createContext, useReducer, useMemo } from "react";

import { userReducer, defaultUser } from "./reducers/user";
import { menuReducer, defaultMenu } from "./reducers/menu";

import userLogin from "./actions/userLogin";
import setMenu from "./actions/setMenu";
import keepState from "./actions/keepState";

const Stores = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      return {
        userReducer: userReducer(prevState.userReducer, action),
        menuReducer: menuReducer(prevState.menuReducer, action),
      };
    },
    {
      userReducer: defaultUser,
      menuReducer: defaultMenu,
    }
  );

  const actions = useMemo(
    () => ({
      ...userLogin(dispatch),
      ...setMenu(dispatch),
      ...keepState(dispatch),
    }),
    []
  );

  return (
    <Stores.Provider value={{ state, dispatch, actions }}>
      {children}
    </Stores.Provider>
  );
};

export { Stores, Store };
