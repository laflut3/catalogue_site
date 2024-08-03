import mongoose, { Schema, model, models } from 'mongoose';

export interface LinkDocument {
    url: string;
    type: string;
}

const LinkSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    type : {
        type: String,
        required: true,
    }
});

const Link = mongoose.models?.Link || model<LinkDocument>('Link', LinkSchema);
export default Link;