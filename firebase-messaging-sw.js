importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
apiKey: "AIzaSyCSapx5d9v_fxpPBzuOfnH66lvQoQ8H-6E",
authDomain: "taxi-kristian.firebaseapp.com",
projectId: "taxi-kristian",
messagingSenderId: "872925880546",
appId: "1:872925880546:web:12da74898c90a0155b7ebb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){

self.registration.showNotification("🚕 Cursă nouă",{
body: payload.data?.body || "Ai primit o cursă nouă",
icon: "/Driver-taxi/icon.png",

vibrate: [300,100,300,100,300],

requireInteraction: true,

tag: "new-ride",

actions: [
{
action: "open",
title: "Deschide aplicația"
}
]

});

});
