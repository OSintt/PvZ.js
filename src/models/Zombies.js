import { Schema, model } from 'mongoose';

const ZombieSchema = new Schema({
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
    toughness: String,
    damage: Number,
    absorbs: Number,
    sun_cost: Number,
    brain_cost: Number,
    first_seen: String
}); 

export default model('Zombie', ZombieSchema);