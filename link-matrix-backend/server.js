const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/link-matrix', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/protected', require('./routes/protected'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
