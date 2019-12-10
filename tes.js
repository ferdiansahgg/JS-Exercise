function btnclick() {
    var pjg, lbr, L;
    pjg = Number(document.getElementById("txtp").value);
    lbr = Number(document.getElementById("txtl").value);
    L = LuasPersegiPanjang(pjg, lbr);
    // s = "abc";
    // document.write(tambahtitikakhir(s));
    document.getElementById("output").innerHTML = "Luas Persegi panjang = " + L;

    // function tambahtitikakhir(s); {
    //     return s + ".";
    // }

    function LuasPersegiPanjang(p, l) {
        return p * l;
    }
    //tidak ada return berarti procedure
    //ada return berarti fungsi/function

}