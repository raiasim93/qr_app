import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Configure dotenv for environment variables
dotenv.config();
const port = process.env.PORT;

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173"
  ]
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Server running');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});