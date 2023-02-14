import mongoose from "mongoose";

const Schema = mongoose.Schema;

const products = [
  {
    id: 1,
    name: "CD1",
    description: "This is CD 1",
    price: 19.99,
  },
  {
    id: 2,
    name: "CD2",
    description: "This is CD 2",
    price: 29.99,
  },
  {
    id: 3,
    name: "CD3",
    description: "This is CD 3",
    price: 39.99,
  },
];

const trackSchema = new Schema({
  artist: String,
  title: String,
});

export const Track = mongoose.model("Track", trackSchema);

export default products;
