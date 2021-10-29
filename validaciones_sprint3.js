
let registros = []; 


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
    registros.push (usuarioCreado);
    console.log(usuarioCreado); 
    console.log(registros); 
    //registros = OrdenarArreglo(registros);
    document.getElementById("in_nombre_usuario").value= "";
    document.getElementById("in_contrasena").value= "";
    document.getElementById("in_confirmar_contrasena").value="";
    
} 

function OrdenarArreglo (arreglo){
    arreglo.sort((a,b) => {
        if (a.usuario.toLowerCase() < b.usuario.toLowerCase()){
            return -1;
        }
        else if (a.usuario.toLowerCase() > b.usuario.toLowerCase()){
            return 1;
        }
            return 0; 
    });
    console.log(arreglo);
    return arreglo;
}

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro; 