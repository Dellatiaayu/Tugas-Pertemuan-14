function hasil() {
    var harga=parseInt(document.getElementById('harga').value);
    var jumlah= parseInt(document.getElementById('jumlah').value);
    var total=harga*jumlah;
    document.getElementById("total").innerHTML=total;
    var pajak=0.10;
    var bayar;
    if (pajak>0){
        bayar=total+(total*pajak);
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("pajak").innerHTML=total*0.10;

    }else {
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("pajak").innerHTML="0%";

    }

    
}