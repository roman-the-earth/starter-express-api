/**
 * Required External Modules
 */
 const express = require('express');
 const path = require('path');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
 
/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/gigs", (req, res) => {
  res.render("gigs", { title: "Gigs" });
});

app.get("/booking", (req, res) => {
  res.render("booking", { title: "Bookings" });
});

app.get("/gallery", (req, res) => {
  res.render("gallery", { title: "Gallery" });
});

/**
 * Server Activation
 */
 app.listen(port, () => {
    console.log(`Listening for convincers requests on http://localhost:${port}`) ;
  });