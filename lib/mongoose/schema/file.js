import { Schema } from "mongoose";

export const fileSchema = new Schema({
    name: { type: String },
    type: { type: String, required: true },
    size: { type: String, required: true, },
    buffer: { type: String, required: true, },
});