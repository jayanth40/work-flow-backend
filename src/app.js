
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sequenceRoutes = require('./routes/SequenceRoutes');
const waitRoutes = require('./routes/waitRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const cors = require('cors');

const app = express();
const port = 8000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://jay:jay@cluster0.walqjnt.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

// Routes
app.use('/api', sequenceRoutes);
app.use('/api', waitRoutes);
app.use('/api', uploadRoutes); 

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
