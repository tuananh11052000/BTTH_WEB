var mongoose = require('mongoose');
const Int32 = require("mongoose-int32").loadType(mongoose);

var hoaSchema = new mongoose.Schema({
    mahoa: "number",
    maloai: "number",
    tenhoa: "string",
    dongia: String,
    hinh: String,
    mota: String
});

var Hoa = mongoose.model('Hoa', hoaSchema, 'hoa');

module.exports = Hoa;