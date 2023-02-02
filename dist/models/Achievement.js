"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const AchievementSchema = new _mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    image: {
        type: String,
        required: true,
        unique: true
    }
});
const _default = (0, _mongoose.model)('Achievement', AchievementSchema);
