function validar_nombre_usuario (string){
    var letras = "abcdefghijklmnñopqrstuvwyz"
    if (string.length >= 6 & string.length <= 30){
        string= string.toLowerCase();
        for (i=0; i< string.length; i++){
            if (letras.indexOf(string.charAt(i),0) != -1){
            }
            else{
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
function validar_contrasena (string){
    var valores = "0123456789abcdefghijklmnñopqrstuvwyz";
    if (string.length >= 6){
        var contrasena = string.toLowerCase();
        for (i=0; i< string.length; i++){
            if (valores.indexOf(contrasena.charAt(i),0) != -1){
            }
            else{
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
function confirmar_contrasena (stringA, stringB){
    const valida1 = validar_contrasena(stringA);
    const valida2 = validar_contrasena(stringB);
    if ((valida1 & valida2) & (stringA == stringB)){
        return true;
        }
        else{
            return false;
        }
    }
module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;
