
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create =  async(data) =>{
    var c = new Customer(data);
    var res = await c.save();
}
    