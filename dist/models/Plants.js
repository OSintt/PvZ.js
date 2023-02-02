"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const PlantSchema = new _mongoose.Schema({
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
const _default = (0, _mongoose.model)('Plant', PlantSchema);
