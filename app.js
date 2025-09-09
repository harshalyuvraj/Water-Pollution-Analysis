const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import the database connection and routes
const connectDB = require('./config/database');

const physicalRoutes = require('./routes/physical');
const chemicalRoutes = require('./routes/chemical');
const biologicalRoutes = require('./routes/biological');
const airRoutes = require('./routes/air');
const environmentalRoutes = require('./routes/environmental');
const informationRoutes = require("./routes/information");
const authRoutes = require('./routes/auth');


// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('welcome', { pageTitle: 'Home Page', mainHeading: 'Welcome to Water Pollution Awareness' });
});

// Authentication routes
app.use('/', authRoutes);

// Main water pollution page
app.get('/fwater', (req, res) => {
    res.render('fwater', { pageTitle: 'Main', mainHeading: 'About Water Pollution' });
});

// Information route
app.get('/information', (req, res) => {
    res.render('information'); // Render the information
});

app.use("/information", informationRoutes);

// physicalRoutes
app.use('/pdi', physicalRoutes);

// chemicalRoutes
app.use('/cdi', chemicalRoutes);

// biologicalRoutes
app.use('/bdi', biologicalRoutes);

// airRoutes
app.use('/adi', airRoutes);

// environmetal
app.use('/odi', environmentalRoutes);

// physicalRoutes
app.get('/physical', (req, res) => {
    res.render('physical'); // Render the information
});
app.use('/physical', physicalRoutes);

// chemicalRoutes
app.get('/chemical', (req, res) => {
    res.render('chemical'); // Render the information
});
app.use('/chemical', chemicalRoutes);

// biologicalRoutes
app.get('/biological', (req, res) => {
    res.render('biological'); // Render the information
});
app.use('/biological', biologicalRoutes);

// airRoutes
app.get('/air', (req, res) => {
    res.render('air'); // Render the information
});
app.use('/air', airRoutes);

// environmentalRoutes
app.get('/environmental', (req, res) => {
    res.render('environmental'); // Render the information
});
app.use('/environmental', environmentalRoutes);

//water polltion 
app.get('/treatment', (req, res) => res.render('treatment'));
app.get('/waterpollution', (req, res) => res.render('waterpollution'));

//AQI calculater
app.get('/AQI', (req, res) => res.render('AQI'));

// parametrs routes
const parametersRoutes = require("./routes/parameters");


//parameters
app.get('/parameters',(req,res)=>{
    res.render('parameters');
});
 app.use("/parameters", parametersRoutes);

// ammonia
 app.get('/p1ammonia', (req, res) => {
    res.render('p1ammonia');  // Ensure this file exists in views/
});

// p2bod
app.get('/p2bod', (req, res) => {
    res.render('p2bod');  // Ensure this file exists in views/
});

// p3algae
app.get('/p3algae', (req, res) => {
    res.render('p3algae');  // Ensure this file exists in views/
});
// p4cdom
app.get('/p4cdom', (req, res) => {
    res.render('p4cdom');  // Ensure this file exists in views/
});

// p5chloride
app.get('/p5chloride', (req, res) => {
    res.render('p5chloride');  // Ensure this file exists in views/
});

// p6chlorophyll
app.get('/p6chlorophyll', (req, res) => {
    res.render('p6chlorophyll');  // Ensure this file exists in views/
});

// p7conductivity
app.get('/p7conductivity', (req, res) => {
    res.render('p7conductivity');  // Ensure this file exists in views/
});

// p8cyanide
app.get('/p8cyanide', (req, res) => {
    res.render('p8cyanide');  // Ensure this file exists in views/
});

// p9depth
app.get('/p9depth', (req, res) => {
    res.render('p9depth');  // Ensure this file exists in views/
});

// p10do
app.get('/p10do', (req, res) => {
    res.render('p10do');  // Ensure this file exists in views/
});

// p11lsp
app.get('/p11lsp', (req, res) => {
    res.render('p11lsp');  // Ensure this file exists in views/
});

// p12nitrate
app.get('/p12nitrate', (req, res) => {
    res.render('p12nitrate');  // Ensure this file exists in views/
});

// p13or
app.get('/p13or', (req, res) => {
    res.render('p13or');  // Ensure this file exists in views/
});

// p14ph
app.get('/p14ph', (req, res) => {
    res.render('p14ph');  // Ensure this file exists in views/
});

// p15phosphorus
app.get('/p15phosphorus', (req, res) => {
    res.render('p15phosphorus');  // Ensure this file exists in views/
});

// p16rhodamine
app.get('/p16rhodamine', (req, res) => {
    res.render('p16rhodamine');  // Ensure this file exists in views/
});

// p17temp
app.get('/p17temp', (req, res) => {
    res.render('p17temp');  // Ensure this file exists in views/
});

// p18toc
app.get('/p18toc', (req, res) => {
    res.render('p18toc');  // Ensure this file exists in views/
});

// p19turbidity
app.get('/p19turbidity', (req, res) => {
    res.render('p19turbidity');  // Ensure this file exists in views/
});

// p20waterlevel
app.get('/p20waterlevel', (req, res) => {
    res.render('p20waterlevel');  // Ensure this file exists in views/
});

// p21cp
app.get('/p21cp', (req, res) => {
    res.render('p21cp');  // Ensure this file exists in views/
}); 

//water quality index 

// simple 
app.get('/w6swqi',(req,res)=>{
    res.render('w6swqi');
});

// NSF-WQI 
app.get('/w4nsfwqi',(req,res)=>{
    res.render('w4nsfwqi');
});

// WA-WQI 
app.get('/w5wawqi',(req,res)=>{
    res.render('w5wawqi');
});

// CCME-WQI 
app.get('/w1ccmewqi',(req,res)=>{
    res.render('w1ccmewqi');
});

// Irrigation-WQI 
app.get('/w3iwqi',(req,res)=>{
    res.render('w3iwqi');
});

// Ground-WQI 
app.get('/w2gwqi',(req,res)=>{
    res.render('w2gwqi');
});

// Delphi-WQI 
app.get('/w7delphiwqi',(req,res)=>{
    res.render('w7delphiwqi');
});

// Delphi-WQI 
app.get('/w8minewqi',(req,res)=>{
    res.render('w8minewqi');
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
