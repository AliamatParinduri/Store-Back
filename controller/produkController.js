// import model produk
const produk = require('../models/produk');

const getProduks = async (req,res) => {
    const produks = await produk.find().then(e => e);
    res.json(produks);
}

const addProduk = ({body},res) => {
    const newProduk = new produk({
        nmProduk: body.nmProduk,
        harga: body.harga,
        gambar: body.gambar,
        deskripsi: body.deskripsi,
    });

    newProduk.save((err,data) => {
        if (err) console.log(err)

        res.json({
            "status": 200,
            "message": "Berhasil Tambah Produk",
            "data": data,
        });
    })
}

module.exports = { getProduks, addProduk };