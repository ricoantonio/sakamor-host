importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAMTirYpyzY7QWDkzSPsofpo68jaFltnrk",
  authDomain: "sakamor-8f28d.firebaseapp.com",
  projectId: "sakamor-8f28d",
  storageBucket: "sakamor-8f28d.appspot.com",
  messagingSenderId: "400720458166",
  appId: "1:400720458166:web:cf7afc06ec3ac419d69117",
});

firebase.messaging();

//background notifications will be received here
firebase.messaging().setBackgroundMessageHandler((payload) => {
  const { title, body } = JSON.parse(payload.data.notification);
  var options = {
    body,
    // icon: "/icons/launcher-icon-4x.png",
  };
  registration.showNotification(title, options);
});
