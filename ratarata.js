var i, s;
s = "";
/*Memasukkan isi textbox ke array*/
for (i = 0; i <= 4; i++) {
    s = s + "<label>Masukkan Nilai Ulangan ke-</label>" + i;
    s = s + "<input type='text' id='txtNum" + i + "'> <br> <br>";
}
document.getElementById("input").innerHTML = s;

function btnclick() {
    var a = [];
    var valid;

    // if (valid == true) 
    inputarraytotext(a);
    valid = validasi(a);
    if (valid == true) {
        mean = rataratanilai(a);
        if (mean >= 60) {
            document.getElementById("output").innerHTML =
                "<b>Selamat Anda Lulus !!!</b> <br> <i>rata-rata nilai anda :</i> " + mean;
        } else {
            document.getElementById("output").innerHTML =
                "<b>Anda Tidak Lulus !!!</b> <br> <i>rata-rata nilai anda :</i> " + mean;
        }
    } else {
        document.getElementById("output").innerHTML = "Masukan tidak valid";
    }
}

function inputarraytotext(arr) {

    var i, s, mean, valid, str;
    s = "";
    s = 0;
    for (i = 0; i <= 4; i++) {
        arr[i] = Number(document.getElementById("txtNum" + i).value);
    }
}

function validasi(arr) {
    var valid, i;
    valid == true;
    i = 0;
    while (i <= arr.length && valid == true) {
        if (arr[i] < 0 || arr[i] > 100) {
            valid == false;
        } else {
            i++;
        }
    }
}

function rataratanilai(arr) {
    var i, s;
    s = 0;
    for (i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }
    return s / arr.length;
}