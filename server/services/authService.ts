import passport from 'passport';
import passportLocal from 'passport-local';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

const LocalStrategy = passportLocal.Strategy;
const User = mongoose.model('User'); // Assuming a User model exists

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false, { message: 'Incorrect username.' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done(null, false, { message: 'Incorrect password.' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, (user as any).id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) return next();
  res.status(401).send('Unauthorized');
};
