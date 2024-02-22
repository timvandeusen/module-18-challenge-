const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/social-media-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error')); 
db.once('open', function() {
    console.log('Connected to MongoDB');
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
