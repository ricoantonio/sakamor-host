import React, { createContext, useReducer, useMemo } from "react";

import { userReducer, defaultUser } from "./reducers/user";
import { menuReducer, defaultMenu } from "./reducers/menu";
import { visitPlanReducer, defaultVisitPlan } from "./reducers/visitPlan";
import { visitUnplanReducer, defaultVisitUnplan } from "./reducers/visitUnplan";
import {
  visitSpreadingReducer,
  defaultVisitSpreading,
} from "./reducers/visitSpreading";

import userLogin from "./actions/userLogin";
import setMenu from "./actions/setMenu";
import keepState from "./actions/keepState";

import setPlanVisibility from "./actions/setPlanVisibility";
import setPlanAvability from "./actions/setPlanAvability";
import setPlanCatatan from "./actions/setPlanCatatan";
import setPlanCheckIn from "./actions/setPlanCheckIn";

import setUnplanAvability from "./actions/setUnplanAvability";
import setUnplanVisibility from "./actions/setUnplanVisibility";
import setUnplanCatatan from "./actions/setUnplanCatatan";
import setUnplanCheckIn from "./actions/setUnplanCheckIn";
import setUnplanJenisChannel from "./actions/setUnplanJenisChannel";
import setUnplanOutlet from "./actions/setUnplanOutlet";

import setSpreadingAvability from "./actions/setSpreadingAvability";
import setSpreadingVisibility from "./actions/setSpreadingVisibility";
import setSpreadingCatatan from "./actions/setSpreadingCatatan";
import setSpreadingCheckIn from "./actions/setSpreadingCheckIn";
import setSpreadingJenisChannel from "./actions/setSpreadingJenisChannel";
import setSpreadingOutlet from "./actions/setSpreadingOutlet";

import setDefaultVisitPlan from "./actions/setDefaultVisitPlan";
import setDefaultVisitUnplan from "./actions/setDefaultVisitUnplan";
import setDefaultVisitSpreading from "./actions/setDefaultVisitSpreading";

const Stores = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      return {
        userReducer: userReducer(prevState.userReducer, action),
        menuReducer: menuReducer(prevState.menuReducer, action),
        visitPlanReducer: visitPlanReducer(prevState.visitPlanReducer, action),
        visitUnplanReducer: visitUnplanReducer(
          prevState.visitUnplanReducer,
          action
        ),
        visitSpreadingReducer: visitSpreadingReducer(
          prevState.visitSpreadingReducer,
          action
        ),
      };
    },
    {
      userReducer: defaultUser,
      menuReducer: defaultMenu,
      visitPlanReducer: defaultVisitPlan,
      visitUnplanReducer: defaultVisitUnplan,
      visitSpreadingReducer: defaultVisitSpreading,
    }
  );

  const actions = useMemo(
    () => ({
      ...userLogin(dispatch),
      ...setMenu(dispatch),
      ...keepState(dispatch),

      ...setPlanVisibility(dispatch),
      ...setPlanAvability(dispatch),
      ...setPlanCatatan(dispatch),
      ...setPlanCheckIn(dispatch),
      ...setDefaultVisitPlan(dispatch),

      ...setUnplanVisibility(dispatch),
      ...setUnplanAvability(dispatch),
      ...setUnplanCatatan(dispatch),
      ...setUnplanCheckIn(dispatch),
      ...setUnplanJenisChannel(dispatch),
      ...setUnplanOutlet(dispatch),
      ...setDefaultVisitUnplan(dispatch),

      ...setSpreadingVisibility(dispatch),
      ...setSpreadingAvability(dispatch),
      ...setSpreadingCatatan(dispatch),
      ...setSpreadingCheckIn(dispatch),
      ...setSpreadingJenisChannel(dispatch),
      ...setSpreadingOutlet(dispatch),
      ...setDefaultVisitSpreading(dispatch),
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
