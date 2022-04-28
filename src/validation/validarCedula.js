function validarCedula(cedula) {
    var cad = cedula
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
        if (cad !== "" && longitud === 10 && cad !='0000000000') {
        for ( var i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }
        total = total % 10 ? 10 - total % 10 : 0;
        if (cad.charAt(longitud - 1) == total) {
            console.log("cedula correcta")
            return true;

        } else {
            console.log("cedula incorrecta")
            return false;
        }
    } else {

        return false;
    }
}
export default validarCedula;