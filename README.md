Features Implemented

Product List View
The application displays a list of disclosed products with their name, category, producer, disclosure status, and last updated date. Users can search products by name, apply filters based on category and status, and sort products either alphabetically or by date. The list is presented using card-style layouts with simple hover and focus effects for better clarity.

Product Detail View
Each product has a detailed disclosure page that shows who declared the information, the date of declaration, and the number of evidence files attached. A version history section displays multiple versions of the disclosure to show updates over time. A clear disclaimer is shown stating that the information is self-declared by the producer and not verified or certified by Hedamo.

Interaction and UI
The interface includes loading indicators while data is being prepared and empty state messages when no products match the selected filters. Keyboard navigation is supported to improve accessibility. Smooth transitions are used to keep the interface calm and professional. The overall design is simple and institutional, similar to systems used in compliance or healthcare contexts.

Language and Messaging
All text in the application emphasizes producer responsibility. Words such as certified, verified, approved, or endorsed are intentionally avoided. Every section of the interface reinforces that the platform is focused on disclosure, not validation.

Setup and Running Locally

Prerequisites
Node.js version 18 or higher must be installed. npm is required to manage dependencies.

Steps to Run
Open a terminal and navigate to the project folder.
Run npm install to install all dependencies.
Run npm run dev to start the development server.
Open a browser and go to http://localhost:5173
 to view the application.

Frameworks and Tools Used
React is used to build the user interface.
Vite is used as the development server and build tool.
CSS is used for layout, styling, and transitions.

Assumptions and Notes
All product data is mocked for demonstration purposes.
Evidence counts represent documents uploaded by producers and are not validated.
Version history is included to demonstrate transparency, not approval.
The system is designed to clearly communicate disclosures rather than enforce correctness.

Disclaimer
This application represents a disclosure-based system. All information shown is self-declared by producers. Hedamo does not independently verify, certify, or validate the accuracy of the disclosed information.