import { config } from 'dotenv';
import express from 'express';
import authRoutes from './routes/auth';
import privateRoute from './routes/private';
import connectDB from './config/database';
import errorHandler from './middleware/error';
config();

//Connect Database
connectDB();

const app = express();

//middlewares
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/private', privateRoute);

// Error Handler (Should be last piece of middleware)
app.use(errorHandler);

// Running server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
	console.log('Server running on port: ', PORT)
);

process.on('unhandledRejection', (error, promise) => {
	console.log(`Logged Error: ${error}`);
	server.close(() => process.exit(1));
});
