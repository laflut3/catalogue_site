import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
