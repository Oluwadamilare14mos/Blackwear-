// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBy0bIMp1ORV0UfLgKlxyr2V-I9mJjFb6o",
  authDomain: "blackwear-14a31.firebaseapp.com",
  projectId: "blackwear-14a31",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "BK8Y3DUVXJlxx1qGZYbV4MvlNcDtQCD54-KJcjxhf8QgK6aUO_XZblyIYOUtV_cLxsWxmLe9WZJH1dnGmu4CXwg"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
