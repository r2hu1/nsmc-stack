"use server";
import { connect, disconnect } from "mongoose";

export async function connect() {
    try {
        await connect(process.env.MONGO_URI);
        // console.log("Connected to MongoDB");
    }
    catch (err) {
        console.log(err);
    }
};

export async function disconnect() {
    try {
        await disconnect(process.env.MONGO_URI);
        // console.log("Disconnected from MongoDB");
    }
    catch (err) {
        console.log(err);
    }
};