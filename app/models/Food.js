class Food {
    constructor(_id, _tenMon, _loaiMon, _giaMon, _khuyenMai, _tinhTrang, _hinhMon, _moTa) {
        this.id = _id;
        this.tenMon = _tenMon;
        this.loaiMon = _loaiMon;
        this.giaMon = _giaMon;
        this.khuyenMai = _khuyenMai;
        this.tinhTrang = _tinhTrang;
        this.hinhMon = _hinhMon;
        this.moTa = _moTa;
        this.giaKhuyenMai = 0;


    }
    tinhGiaKM() {
        this.giaKhuyenMai = (this.giaMon * ((100) - this.khuyenMai)) / 100;
    }
}

export default Food;