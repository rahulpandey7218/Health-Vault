// import { initializeApp, getApps } from "firebase/app"
// import { getAuth } from "firebase/auth"
// import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyCwzo81MeRJcBkki11Pn2V6Up8jvTtbfbo",
//   authDomain: "health--vault.firebaseapp.com",
//   projectId: "health--vault",
//   storageBucket: "health--vault.firebasestorage.app",
//   messagingSenderId: "25091872315",
//   appId: "1:25091872315:web:f700ae0e2cfde4f054ae1e",
//   measurementId: "G-778YDNNX5M",
// }

// // Initialize Firebase only if no apps exist
// let app
// if (!getApps().length) {
//   app = initializeApp(firebaseConfig)
// } else {
//   app = getApps()[0]
// }

// // Initialize services
// export const auth = getAuth(app)
// export const db = getFirestore(app)

// export default app


import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase only if no apps exist
let app
if (!getApps().length) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApps()[0]
}

// Initialize services
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app
