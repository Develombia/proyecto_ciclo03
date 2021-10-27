let registros = [];

function iniciar_sesion(usuario,contrasena,rcaptcha){


    let respuesta;

    
    for(const user of registros){
        if(user.usuario.toLowerCase == usuario && user.contrasena == contrasena && validar_captcha(rcaptcha)){
            print("Su correo y contraseña son correctas, al igual que el captcha");
            respuesta = true;
        }else{
            respuesta = false;
        }
    }
    
    return respuesta;    
}

function agregarRegistro() 
{ 
    function Registros (usuario, contrasena, confirmar_contrasena) 
        { 
            this.usuario = usuario; 
            this.contrasena = contrasena; 
            this.confirmar_contrasena = confirmar_contrasena; 
            
        } 
    const valorUsuario = document.getElementById("in_nombre_usuario").value; 
    const valorContrasena = document.getElementById("in_contrasena").value; 
    const valorConfirmar_contrasena = document.getElementById("in_confirmar_contrasena").value;  
    const usuarioCreado = new Registros (valorUsuario,valorContrasena,valorConfirmar_contrasena); 
    registros.push(usuarioCreado);
    console.log(usuarioCreado); 
    console.log(registros); 
    registros = OrdenarArreglo(registros);
    document.getElementById("in_nombre_usuario").value= "";
    document.getElementById("in_contrasena").value= "";
    document.getElementById("in_confirmar_contrasena").value="";
    
} 
function OrdenarArreglo(registros) 
{
    registros.sort((a, b) => 
    {
        const aSorting = a.usuario.toLowerCase();
        const bSorting = b.usuario.toLowerCase();
        if (aSorting < bSorting) 
        {
            return -1;
        }
        if (aSorting > bSorting) 
        {
            return 1;
        }
        return 0;
    });
}
registros.sort( OrdenarArreglo );

function validar_captcha(rcaptcha) {
    var login_captcha = "Bogotá";

    let respuesta = rcaptcha.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    print(respuesta);
    if(login_captcha.toLowerCase === respuesta.toLowerCase){
        return true;
    }else {
        return false;
    }
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
module.exports.agregarRegistro = agregarRegistro;
module.exports.OrdenarArreglo = OrdenarArreglo;