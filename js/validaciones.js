(function () {
    "use strict";
    //!sprint 2 
    var errorDiv = document.getElementById('error')
    var inFormDiv = document.getElementById('inForm')
    //campos datos usuarios 
    var nombre = document.getElementById('in_nombre_usuario');
    var pass = document.getElementById('in_contrasena');
    var confirm_pass = document.getElementById('in_confirmar_contrasena');
    const formulario = document.getElementById('form_registrarse');
    const registroBtn = document.getElementById('btn_registrar_usuario');
    const expresiones = {
        nombre: /^[a-zA-Z0-9]{6,30}$/, // Letras [mayus,minus], numeros, 6 - 30 digitos.
        password:  /^[a-zA-Z0-9]{6,16}$/, // Letras, numeros + 6  digitos.
    }
    formulario.addEventListener('submit', e => {
        e.preventDefault();
    })
    registroBtn.addEventListener('click', agregarRegistro)
    
    nombre.addEventListener('keyup', validar_nombre_usuario)
    pass.addEventListener('keyup', validar_contrasena)
    confirm_pass.addEventListener('keyup', confirmar_contrasena)
    function validar_nombre_usuario(string) {
        if(expresiones.nombre.test(nombre.value))
        {
            console.log(' nombre correcto')
            return true;
        }
        else
        {
            console.log(' nombre incorrecto')
            if (this.value == '') {
                error.style.display = 'block';
                error.innerHTML = "este campo es obligatorio";
                this.style.border = '1px solid red';
                error.style.border = '1px solid red';
              }
              else {
                error.style.display = 'none';
                this.style.border = '1px solid #cccccc';
              }
              return false;
        }
        }
    function validar_contrasena(string){
        if(expresiones.password.test(pass.value))
        {
            console.log('pass correcto')
            return true;
        }
        else
        {
            console.log('pass incorrecto')
            if (this.value == '') {
                error.style.display = 'block';
                error.innerHTML = "este campo es obligatorio";
                this.style.border = '1px solid red';
                error.style.border = '1px solid red';
              }
              else {
                error.style.display = 'none';
                this.style.border = '1px solid #cccccc';
              }
              return false;
        }
    }
    function confirmar_contrasena(stringA,stringB){
        var pass = document.getElementById('in_contrasena');
        var confirm_pass = document.getElementById('in_confirmar_contrasena');
        if (pass.value != confirm_pass.value)
        {
            if (this.value == '') {
                error.style.display = 'block';
                error.innerHTML = "este campo es obligatorio";
                this.style.border = '1px solid red';
                error.style.border = '1px solid red';
            }
            else {
                error.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
            return false;
        }
        else
        {
            console.log('confirmado')
            return true;
        }
    }
    //!sprint 3
    let registros = [];
    function agregarRegistro() {
        let nombreVal = document.getElementById('in_nombre_usuario').value;
        let passVal = document.getElementById('in_contrasena').value;
        let confirm_passVal = document.getElementById('in_confirmar_contrasena').value;
        var fulltable = "";
        
        for (var i = 0; i < registros.length; i++) {
            fulltable += "<ul><li>" + registros[i].usuario + "</li><li>" + registros[i].contrasena + "</li><li>" + registros[i].confirmar_contrasena + "</li></ul>";   
        }
        var nuevoArreglo = {usuario: nombreVal,contrasena: passVal,confirmar_contrasena: confirm_passVal};
        registros.push(nuevoArreglo)
        inFormDiv.innerHTML = fulltable;
    }
    function OrdenarArreglo(registros) {
        registros.sort((a, b) => {
            const aSorting = a.nombreVal.toLowerCase();
            const bSorting = b.nombreVal.toLowerCase();
            if (aSorting < bSorting) {
                return -1;
            }
            if (aSorting > bSorting) {
                return 1;
            }
            return 0;
        });
    }
    console.log(registros);

    module.exports.registros = registros;
    module.exports.OrdenarArreglo = OrdenarArreglo;
    module.exports.agregarRegistro = agregarRegistro;
    module.exports.validar_nombre_usuario = validar_nombre_usuario;
    module.exports.validar_contrasena = validar_contrasena;
    module.exports.confirmar_contrasena = confirmar_contrasena;
})();