import { Schema, model } from 'mongoose';

const PlantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    sun_cost: {
        type: Number,
        required: true
    },
    boost: {
        type: Boolean,
        default: false
    },
    recharge: String,
    usage: String,
    damage: String,
    toughness: String,
    range: String
});

export default model('Plant', PlantSchema);