const express = require('express');
const router = express.Router();

// import controller produk
const { getProduks, addProduk } = require('../controller/produkController');

router.route('/produk')
    .get(getProduks)
    .post(addProduk)

module.exports = router;