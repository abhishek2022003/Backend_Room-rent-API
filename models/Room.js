import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
      price: {
        type: Number,
        required: true,
      },
      maxPeople: {
        type: Number,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      // photos: {
      //   type: [String],
      // },
});

export default mongoose.model("Room",roomSchema);