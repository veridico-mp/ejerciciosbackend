document.addEventListener('DOMContentLoaded', ()=>{
    let acces = document.getElementById('conect');

    acces.addEventListener('click', ()=>{
        let user = document.getElementById('user').value;
        let password = encryptarPass(document.getElementById('password').value);
    
        validarUsuario(user, password);
        user= null;
        password=null;
    })
})
//Funcion que realiza el envio del usuario y contraseña para loguear
function validarUsuario(user, pass){
    let url = 'http://127.0.0.1:3000/login'
    fetch(url, {
        method: 'POST', // Método de la solicitud (POST en este caso)
        headers: {
          'Content-Type': 'application/json', // Tipo de contenido (JSON en este ejemplo)
        },
        body: JSON.stringify({
            user: user,
            password: pass
        }),
    })
    .then(response => response.json())
    .then(data=>{manejoRespuesta(data)})
    .catch(err => console.log(err));
};
//Maneja las respuestas del servidor
function manejoRespuesta(dato){
    if(dato.status!=="ok"){
        alert(dato.message);
    }else {
        guardarUsuario(dato);
        alert(dato.message);
        window.location.href = "index.html";
    }
}
//Función para encryptar las contraseñas
function encryptarPass(pass){
    // El método md5 toma una cadena y devuelve un objeto WordArray
    let encryptedPass = CryptoJS.MD5(pass);
    // Convertir el objeto WordArray a una cadena hexadecimal
    let hex = encryptedPass.toString(CryptoJS.enc.Hex);
    return hex;
}
//Guardar usuario en el local storage para mostrarlo en el navbar del index
function guardarUsuario(dato){
    localStorage.setItem('Usuario', dato.user);
    localStorage.setItem('Token', dato.token);
}