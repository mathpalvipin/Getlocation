const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const serverless = require('serverless-http');

// Initialize Firebase Admin SDK
const serviceAccount = require("./location.json"); // Replace with the path to your service account key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://location-app-2dc2f-default-rtdb.firebaseio.com", // Replace with your Firebase project URL
});

// Create an Express app
const app = express();
app.use(bodyParser.json());
const router = express.Router();

// Create a reference to the Firebase Realtime Database
const db = admin.database();
const locationsRef = db.ref("locations");

// API endpoint to store location data
router.post("/", async (req, res) => {
  console.log(req.query);
  const { latitude, longitude } = req.query;

  try {
    const newLocationRef = locationsRef.push();
    await newLocationRef.set({ latitude, longitude });
    res.status(201).json({ message: "Location saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.use('/api/location', router);
module.exports.handler = serverless(app);

