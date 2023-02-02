import { Schema, model } from 'mongoose';

const AchievementSchema = new Schema({
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
    },
});

export default model('Achievement', AchievementSchema);