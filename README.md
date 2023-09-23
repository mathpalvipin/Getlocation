# Getlocation

### tools use
Firebase 
node.js express.js
react.js



ther is 2 folder 
1.backend 
2.react - frontend


## first setup the firebase admin 
Install the Firebase Admin SDK:

bash
npm install firebase-admin

In the Firebase Console, click on "Project settings" (gear icon) > "Service accounts."

Under "Firebase Admin SDK," click "Generate new private key."
This will download a JSON file containing your service account credentials. Keep this file secure.


```const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");

// Initialize Firebase Admin SDK
const serviceAccount = require("./path/to/your/serviceAccountKey.json"); // Replace with the path to your service account key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-firebase-project-id.firebaseio.com", // Replace with your Firebase project URL
});

// Create an Express app
const app = express();
app.use(bodyParser.json());

// Create a reference to the Firebase Realtime Database
const db = admin.database();
const locationsRef = db.ref("locations");

// API endpoint to store location data
app.post("/api/location", async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    const newLocationRef = locationsRef.push();
    await newLocationRef.set({ latitude, longitude });
    res.status(201).json({ message: "Location saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```


place the json file at its location downloaded from firebase give  Firebase project URL as written in code 

###Backend is fine now
``` npm run build                  //use to deploy script added in package.json
```

##frontend 
just replace the url with you backend 
