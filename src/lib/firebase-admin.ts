import admin from "firebase-admin";
let serviceAccount = require("../../firebase.json");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(process.env.NEXT_FIREBASE_CONFIG),
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
