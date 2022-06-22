import { Schema, model } from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator')

const usersSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    CI: {
        type: Number,
        required: true,
        uniqued: true,
        trim: true
    },
    address: {
        type: Number,
        required: true,
        trim: true
    },
}, {
    versionKey: false,
    timestamps: true
});

usersSchema.plugin(uniqueValidator)
export default model('Users', usersSchema)