"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const ZombieSchema = new _mongoose.Schema({
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
const _default = (0, _mongoose.model)('Zombie', ZombieSchema);
