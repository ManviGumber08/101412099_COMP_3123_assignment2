const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Routes
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
