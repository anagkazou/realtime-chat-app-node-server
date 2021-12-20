const express = require ('express');

const cors = require('cors');
const PORT = process.env.PORT || 5000;

require('dotenv').config();

const authroutes = require('./routes/auth.js')

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded());

app.get('/', (req, res) =>{
    res.send('Hello World!')
} ) 

app.get('/auth',authroutes ) 

app.use('')

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));