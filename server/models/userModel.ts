import { Schema, model } from 'mongoose';

interface IUser {
  username: string;
  password: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = model<IUser>('User', userSchema);

export default User;
