//fungsi dengan cara biasa
function helloworld() {
    console.log("Hello World!");
}
//fungsi dengan cara Ekspresi
var namafungsi = function () {
    console.log("Hello World!");
    //fungsi tanpa nama (Anonymous Function)
}
//fungsi dengan tanda panah
//fungsi yang sering digunakan di js masa kini
//standar penulisan ES6
var namafungsi = () => {
    console.log("Hello World!!");
}
// atau seperti ini
var namafungsi = () => console.log("Hello World !!");
//fungsi dengan konstruktor
var namafungsi = new Function('console.log("Hello world");');
//tidak direkomendasikan