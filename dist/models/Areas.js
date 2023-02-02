"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const AreaSchema = new _mongoose.Schema({
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
    plants: [
        {
            type: _mongoose.Types.ObjectId,
            ref: 'Plant'
        }
    ],
    zombies: [
        {
            type: _mongoose.Types.ObjectId,
            ref: 'Zombie'
        }
    ],
    to_unlock: String
});
const _default = (0, _mongoose.model)('Area', AreaSchema);
