const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
const port = 5000; //Port for backend

app.use(cors()); 
app.use(express.json()); 

//Create connection to the database
const connection = mysql.createConnection({
    host: 'mysql',
    user: 'user',
    password: 'BTHDonken',
    database: 'burger_db'
});

//Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Failed to connect to the database, error:', err);
        return;
    }
    console.log('Successfully connected to BTHDonkens database!');
});

//Post request for creating the order
app.post('/api/order', (req, res) => {
    const order = req.body;
    console.log('Order received: ', order);
    
    res.status(201).json({ message: 'Order received successfully', order });

});

//Start the backend server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});