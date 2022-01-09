const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/store");

const produkCollection = new mongoose.Schema({
    nmProduk: {type:String,required:true},
    harga: {type:Number,required:true},
    gambar: {type:String,required:true},
    deskripsi: {type:String,required:true},
},{timestamps: true});

const produk = mongoose.model("produk", produkCollection);

module.exports = produk;