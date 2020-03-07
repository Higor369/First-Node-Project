
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create =  async(data) =>{
    var c = new Customer(data);
    var res = await c.save();
}

exports.authenticate = async(data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}
    

exports.getById = async(id) => {
    const res = await Customer.findById(id);
    return res;
}