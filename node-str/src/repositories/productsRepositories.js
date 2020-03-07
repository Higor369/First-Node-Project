

const mongoose = require('mongoose');
const Product = mongoose.model('Products');

exports.get =  async() =>{
    var res = await Product.find({ active: true},`title price slug`)
    return res;
}
    