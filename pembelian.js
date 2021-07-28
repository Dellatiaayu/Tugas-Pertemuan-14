function hasil() {
    var jumlah=parseInt(document.getElementById('jumlah').value);
    var harga= parseInt(document.getElementById('harga').value);
    var total=jumlah*harga;
    document.getElementById("total").innerHTML=total;
}