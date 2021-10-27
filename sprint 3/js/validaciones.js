    //campos datos usuarios 
    let registros = [];

    function agregarRegistro() 
    { 
        function Registros(usuario, contrasena, confirmar_contrasena) 
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
    module.exports.registros = registros;
    module.exports.OrdenarArreglo = OrdenarArreglo;
    module.exports.agregarRegistro = agregarRegistro;
    