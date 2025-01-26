// db/index.js
import mongoose from "mongoose";
import DB_NAME from "../constants.js"; // Correct import

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `mongodb://localhost:27017/xyz`
        );
        console.log(`MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1); // Exit on failure
    }
};

export default connectDB;
