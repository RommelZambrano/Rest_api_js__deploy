import { Schema, model } from 'mongoose';

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


export default model('Users', usersSchema)