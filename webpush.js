import "firebase/messaging";
import firebase from "firebase/app";

const firebaseCloudMessaging = {
  //checking whether token is available in indexed DB
  tokenInlocalforage: async () => {
    return localStorage.getItem("fcm_token");
  },

  userInlocalforage: async () => {
    return localStorage.getItem("user");
  },

  //initializing firebase app
  init: async function () {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAMTirYpyzY7QWDkzSPsofpo68jaFltnrk",
        authDomain: "sakamor-8f28d.firebaseapp.com",
        projectId: "sakamor-8f28d",
        storageBucket: "sakamor-8f28d.appspot.com",
        messagingSenderId: "400720458166",
        appId: "1:400720458166:web:cf7afc06ec3ac419d69117",
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await this.tokenInlocalforage();
        const userInlocalforage = await this.userInlocalforage();

        //if FCM token is already there just return the token
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        if (userInlocalforage) {
          //requesting notification permission from browser
          const status = await Notification.requestPermission();
          if (status && status === "granted") {
            //getting token from FCM
            const fcm_token = await messaging.getToken();
            if (fcm_token) {
              //setting FCM token in indexed db using localforage
              localStorage.setItem("fcm_token", fcm_token);
              //return the FCM token after saving it
              return fcm_token;
            }
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };
