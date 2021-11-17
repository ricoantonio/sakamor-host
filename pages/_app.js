import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Store } from "../store";
import { useEffect } from "react";
import Router from "next/router";
import { firebaseCloudMessaging } from "../webpush";
import firebase from "firebase/app";
import { getAllAnnouncement } from "../helper";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      Router.push("/login");
    }
  }, []);

  useEffect(() => {
    setToken();
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
    function getMessage() {
      const messaging = firebase.messaging();
      console.log({ messaging });
      messaging.onMessage((message) => {
        // localStorage.setItem("notif", true);
      });
    }
  });
  return (
    <Provider session={pageProps.session}>
      <Store>
        <Component {...pageProps} />
      </Store>
    </Provider>
  );
}

export default MyApp;
