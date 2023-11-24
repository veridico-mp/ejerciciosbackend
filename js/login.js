document.addEventListener('DOMContentLoaded', ()=>{
    let acces = document.getElementById('conect');

    acces.addEventListener('click', ()=>{
        let user = document.getElementById('user').value;
        let password = document.getElementById('password').value;
    


    })
})
//Funcion que realiza el envio del usuario y contraseña para loguear
function solicitarRegistro(user, pass){
    let url = 'http://127.0.0.1:3000/registro'
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