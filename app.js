var dec = document.getElementById("dec1");
var bin = document.getElementById("dec2");


function cal() {
    var decimal = dec.value;

    var binary = "";
    if (Number(decimal) === 0) {
        bin.text = "0";

    }
    if (decimal !== "" &&
        Number.isInteger(Number(decimal))) {

        while (decimal > 0) {
            binary += (decimal % 2);
            decimal = ~~(decimal / 2);

        }

        bin.value = [...binary].reverse().join("");
    } else {
        alert("Please add decimal value");
        dec.value = "";
        bin.value = "";
    }
}

function reset() {
    dec.value = "";
    bin.value = "";

}