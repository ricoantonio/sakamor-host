import React from "react";

import Home from "../pages/home";
import Calendar from "../pages/calendar";
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
      ) : null}
      <BotNav />
    </>
  );
};

export default HomeLayout;
