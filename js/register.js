document.addEventListener('DOMContentLoaded', ()=>{
    //Boton de registro
    let register = document.getElementById('register');
    //Evento click sobre boton registro
    register.addEventListener('click', ()=>{
        let usuario = document.getElementById('user');
        let pass1 = document.getElementById('password1');
        let pass2 = document.getElementById('password2');
        let passHex;
        //Compruebo que los campos tengan contenido
        if((usuario.value === null || usuario.value === "") || (pass1.value === null || pass1.value === "") || (pass2.value === null || pass2.value === "")){
            alert('Todos los campos deben estar completos.');
        }else {
            if(!(encryptarPass(pass1.value) === encryptarPass(pass2.value))){
                alert('Las contraseñas deben cohincidir.');
            }else {
                passHex = encryptarPass(pass1.value);
            }
        }
        console.log(encryptarPass(pass1.value));
        //Resetea los inputs
        usuario.value = null;
        pass1.value = null;
        pass2.value = null;
        //Acá se realizará el envio mediante fetch POST del usuario y la constraseña encriptada
        solicitarRegistro()
        //Acá se recive la confirmación del registro y se redirige al login
        
    })
})
//Función para encryptar las contraseñas
function encryptarPass(pass){
    // El método md5 toma una cadena y devuelve un objeto WordArray
    let encryptedPass = CryptoJS.MD5(pass);
    // Convertir el objeto WordArray a una cadena hexadecimal
    let passHex = encryptedPass.toString(CryptoJS.enc.Hex);
    return passHex;
}
//Funcion que realiza envia los datos del usuario para procesar el registro
function solicitarRegistro(){

    fetch()

}