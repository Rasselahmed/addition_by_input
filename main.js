function add(number1, number2) {
    var r = parseInt(number1) + parseInt(number2);
    document.getElementById("output").innerhtml = r;
    return r;
}
add();
