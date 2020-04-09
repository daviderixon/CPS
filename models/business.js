const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const businessSchema = new Schema({
    name:{
        type:'String',
        required:true,
        trim: true,
    },
});
module.exports = mongoose.model('Business', businessSchema);