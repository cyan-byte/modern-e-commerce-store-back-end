// Controller for managing products

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  color: String,
  details: String,
  price: Number,
});

const Product = mongoose.model("product", productSchema);

// const products = [
//   {
//     name: "mammoth vase",
//     image: "pexels-vlada-karpovich-7902913.jpg",
//     color: "deep sand",
//     details:
//       "Elevated, handcrafted, over-sized pottery decor suitable for indoor & outdoor use",
//     price: 72,
//   },
//   {
//     name: "mammoth bundle",
//     image: "oshin-khandelwal-fq839fSNEuo-unsplash.png",
//     color: "deep sand",
//     details: "mammoth bundle details",
//     price: 160,
//   },
//   {
//     name: "mint jug vase",
//     image: "jaikishan-patel-yS960iAbSqo-unsplash.png",
//     color: "mint",
//     details: "mint jug details",
//     price: 56,
//   },
//   {
//     name: "pinky hands",
//     image: "andrew-petrov-hopnkQoC0dg-unsplash.png",
//     color: "ivory",
//     details: "pinky hands details",
//     price: 40,
//   },
//   {
//     name: "incense holder hand",
//     image: "franco-antonio-giovanella-bodma3C2GHE-unsplash.png",
//     color: "light charcoal",
//     details: "incense holder details",
//     price: 48,
//   },
//   {
//     name: "arched sculpture set",
//     image: "allison-saeng-WO7nL4oLdP4-unsplash.png",
//     color: "gray and brown",
//     details: "arched sculpture set details",
//     price: 64,
//   },
//   {
//     name: "the sandy teapot",
//     image: "pexels-andre-william-3010771.png",
//     color: "deep tan",
//     details: "sandy teapot details",
//     price: 20,
//   },
// ];

// module.exports for this file is JUST the product variable
module.exports = Product;
