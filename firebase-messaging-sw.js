importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
apiKey: "AIzaSyCsapx5d9v_fxpPBzu0fnH66lv0o08H-6E",
authDomain: "taxi-kristian.firebaseapp.com",
projectId: "taxi-kristian",
messagingSenderId: "872925880546",
appId: "1:872925880546:web:12da74898c90a0155b7ebb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){

self.registration.showNotification("🚕 Cursă nouă",{
body: payload.data.body,
icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
vibrate: [300,100,300,100,300],
requireInteraction: true
});

});
