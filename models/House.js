import mongoose from "mongoose";
const HouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  // photos: {
  //   type: [String],
  // },
  desc: {
    type: String,
    required: true,
  },
  // rooms: {
  //   type: [String],
  // },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("House", HouseSchema)