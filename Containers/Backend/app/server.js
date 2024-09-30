const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000; //Port for backend

app.use(cors()); 
app.use(express.json()); 

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