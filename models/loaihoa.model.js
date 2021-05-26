var mongoose = require('mongoose');

var loaihoaSchema = new mongoose.Schema({
    maloai: String,
    tenloai: String
});

var LoaiHoa = mongoose.model('LoaiHoa', loaihoaSchema, 'loai_hoa');

module.exports = LoaiHoa;