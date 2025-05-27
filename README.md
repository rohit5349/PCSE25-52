# Title of Project: [PATH MANAGEMENT SYSTEM]

## Team Members:
1. [ROHIT SINGH MAURYA]
2. [KARAN KUMAR]


## Steps for Execution:
1.System Initialization
 .Start the frontend (React or other framework).
 .Launch the backend server (Node.js).
 .Connect to the database (e.g., MongoDB).
 .Load OpenStreetMap API for map and geolocation services.
 
2.User Authentication
 .Display login or registration form on the frontend.
 .Verify user credentials using backend authentication (JWT or sessions).
 .Grant access to system features based on authentication status.

3.Fetch Current Location
 . Use the browser’s Geolocation API or OpenStreetMap to detect and fetch the user's current location.
 . Convert coordinates to human-readable address using reverse geocoding.

4.Input Destination Location
 .User enters a destination in the second input field.
 .Automatically fetch nearby tourist attractions based on the input location using a OpenStreetMap API and custom logic.

5.Select Locations
 .Display a list of nearby tourist attractions to the user.
 .Allow the user to select multiple locations to form a path.

6. Find Shortest Path
 When the user clicks "Find Path":
   .Send selected locations to the backend.
   .Backend calculates the shortest path using algorithms like Dijkstra’s Algorithm
   .Return the optimized path in ascending order of distance (e.g., A → B → C → D).

7. Display Optimized Path
 .Visually render the calculated path on the map interface.
 .Show step-by-step directions or location markers.

8. AI Chatbot Support
 . User can interact with the built-in AI chatbot.
 .The chatbot can assist with common questions like:
  "How do I add a location?"
  "What is the shortest path from A to D?"
  "Suggest popular tourist spots near B."

 9. Error Handling and Feedback
  .Handle API failures, invalid inputs, or missing data gracefully.
  .Display user-friendly error messages and suggestions.

## Checklist:
1. Final Project Report
2. Certificate VII Semester (Dated: December 2024).
3. Certificate VIII Semester (Dated: May 2025).
4. Synopsis
5. Final Presentation
6. Source Code
7. Database dump (.sql file)
8. If a web project, then a Docker file for deployment
9. README (This file)
