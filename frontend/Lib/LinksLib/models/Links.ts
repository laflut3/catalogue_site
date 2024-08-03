import mongoose, { Schema, model, models } from 'mongoose';

const linkSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    type : {
        type: String,
        required: true,
    }
});

const Link = models.Link || model('Link', linkSchema);

export default Link;