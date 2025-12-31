import mongoose from "mongoose";
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CONN);
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.error("MongoDB Connection unsuccessful",error.message);
        process.exit(1);
    }
}

export default connectDB; 