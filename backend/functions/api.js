const express = require("express");
const serverless = require('serverless-http');
const app = express();
const cors = require('cors');

app.use(cors()) ;
const router = express.Router();

//Get all students
const admin = require("firebase-admin");
const bodyParser = require("body-parser");


// Initialize Firebase Admin SDK
const serviceAccount = require("./location.json"); // Replace with the path to your service account key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://location-app-2dc2f-default-rtdb.firebaseio.com", // Replace with your Firebase project URL
});

// Create an Express app

app.use(bodyParser.json());


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
router.post("/ip", async (req, res) => {
  console.log(req.query);
  const {ip} = req.query;

  try {
    const newLocationRef = locationsRef.push();
    await newLocationRef.set({ip});
    res.status(201).json({ message: "ip saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});


app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
