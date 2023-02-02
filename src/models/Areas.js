import { Types, Schema, model } from 'mongoose';

const AreaSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    },
    number_of_levels: Number,
    plants: [{
        type: Types.ObjectId,
        ref: 'Plant'
    }],
    zombies: [{
        type: Types.ObjectId,
        ref: 'Zombie'
    }],
    to_unlock: String
});

export default model('Area', AreaSchema);