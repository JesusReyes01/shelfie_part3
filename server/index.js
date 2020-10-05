require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();
app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db);
    console.log('db connected');
})
.catch(err => res.status(500).send(err))

//endpoint
app.get('/api/inventory', ctrl.getInventory);
app.post('/api/product', ctrl.addProduct);
app.delete('/api/deleteProduct/:id', ctrl.deleteProduct);
app.put('/api/updateProduct/:id' , ctrl.updateProduct);
app.get('/api/product/:id' , ctrl.getProduct)

app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));