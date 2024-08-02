// models/Link.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ILink extends Document {
    url: string;
    type: string;
}

const linkSchema: Schema<ILink> = new Schema({
    url: { type: String, required: true },
    type: { type: String, required: true },
});

const Link: Model<ILink> = mongoose.models.Link || mongoose.model<ILink>('Link', linkSchema);

export default Link;
