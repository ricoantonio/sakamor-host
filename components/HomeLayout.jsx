import React from "react";

import Home from "../pages/home";
import Calendar from "../pages/calendar";
import Reward from "../pages/reward";
import BotNav from "./BotNav";
import { useRouter } from "next/router";

const HomeLayout = () => {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/" ? (
        <Home />
      ) : router.pathname === "/calendar" ? (
        <Calendar />
      ) : router.pathname === "/reward" ? (
        <Reward />
      ) : null}
      <BotNav />
    </>
  );
};

export default HomeLayout;
