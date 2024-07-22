import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import connectDB from './utils/db';
import stateRoutes from './routes/stateRoutes';

const app = express();

// Database connection
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', stateRoutes);

export default app;
