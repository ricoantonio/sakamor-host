import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Store } from "../store";
import { useEffect } from "react";
import Router from "next/router";
import BotNav from "../components/BotNav";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      Router.push("/login");
    }
  }, []);
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
