var express = require('express');
var router = express.Router();

var LoaiHoa = require("../models/loaihoa.model");
var Hoa = require("../models/hoa.model");

async function HienThiChiTiet(res, mahoa) {
  var kq = "<table width='100%' align='center' >";
  await Hoa.find({ 'mahoa': mahoa }).then(function (dshoa) {
    console.log(dshoa);
    for (i = 0; i < dshoa.length; i++) {
      if (i % 3 == 0)
        kq = kq + "<tr>";
      kq = kq + "<td><a href='/detail/" + dshoa[i].mahoa + "'><img src='/images/" + dshoa[i].hinh + "'></a><br>Tên hoa :" + dshoa[i].tenhoa + "<br>Giá bán :" + dshoa[i].dongia + "</td>";
      if ((i + 1) % 3 == 0)
        kq = kq + "</tr>";
    }
    kq = kq + "</table";
  });
  res.render('trang_chi_tiet_hoa', { chitiethoa: kq });
}

/* GET home page. */
router.get('/', function (req, res, next) {
  /*request data from mongodb and render index page*/
  LoaiHoa.find().then(function (loaihoa) {
    Hoa.find().then(function (dshoa) {
      var kq = "<table width='100%' align='center' >";
      for (i = 0; i < dshoa.length; i++) {
        if (i % 3 == 0)
          kq = kq + "<tr>";
        kq = kq + "<td><a href='/detail/" + dshoa[i].mahoa + "'><img src='/images/" + dshoa[i].hinh + "'></a><br>Tên hoa :" + dshoa[i].tenhoa + "<br>Giá bán :" + dshoa[i].dongia + "</td>";
        if ((i + 1) % 3 == 0)
          kq = kq + "</tr>";
      }
      kq = kq + "</table";
      res.render('index', { loaihoa: loaihoa, dshoa: kq });
    })
  });
});
//trang chi tiet tung san pham
router.get('/detail/:mahoa', function (req, res, next) {
  var mahoa = req.params.mahoa;
  console.log(mahoa);

  if (isNaN(mahoa) == false) {
    console.log("Chi tiet");
    HienThiChiTiet(res, mahoa);
  }
});
//trang chu
router.get('/trang_1', function (req, res, next) {
  res.render('trang_1');
});
//trang tim kiem bo hoa
router.get('/trang_2', function (req, res, next) {
  res.render('trang_2');
});
//trang dang ky
router.get('/trang_dang_ky', function (req, res, next) {
  res.render('trang_dang_ky');
});

module.exports = router;
