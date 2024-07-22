import bcrypt from 'bcryptjs';
import User from '../models/userModel'; // Ensure this path is correct based on your project structure

export const registerUser = async (username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  return user;
};

export const authenticateUser = async (username: string, password: string) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  return user;
};
