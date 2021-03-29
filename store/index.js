import React, { createContext, useReducer, useMemo } from "react";

import { userReducer, defaultUser } from "./reducers/user";
import { menuReducer, defaultMenu } from "./reducers/menu";
import { visitPlanReducer, defaultVisitPlan } from "./reducers/visitPlan";

import userLogin from "./actions/userLogin";
import setMenu from "./actions/setMenu";
import keepState from "./actions/keepState";
import setVisibility from "./actions/setVisibility";
import setAvability from "./actions/setAvability";
import setCatatan from "./actions/setCatatan";
import setCheckIn from "./actions/setCheckIn";
import setDefaultVisitPlan from "./actions/setDefaultVisitPlan";

const Stores = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      return {
        userReducer: userReducer(prevState.userReducer, action),
        menuReducer: menuReducer(prevState.menuReducer, action),
        visitPlanReducer: visitPlanReducer(prevState.visitPlanReducer, action),
      };
    },
    {
      userReducer: defaultUser,
      menuReducer: defaultMenu,
      visitPlanReducer: defaultVisitPlan,
    }
  );

  const actions = useMemo(
    () => ({
      ...userLogin(dispatch),
      ...setMenu(dispatch),
      ...keepState(dispatch),
      ...setVisibility(dispatch),
      ...setAvability(dispatch),
      ...setCatatan(dispatch),
      ...setCheckIn(dispatch),
      ...setDefaultVisitPlan(dispatch),
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
