import { Schema } from "mongoose";

export const userSchema = new Schema({
    name: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    polls: { type: Array, default: [] },
});