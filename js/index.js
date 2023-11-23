//Hecho por: Martín Pereira.
const fullList = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;//Rojo Fuego, Azul Marino, Verde Hoja.
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(fullList)
    .then(response=> response.json())
    .then(data=>{
        displayList(data.results);
        //console.log(data.results);
    })
    .catch(error=>{
        let errorMessage = document.createElement("p");
        errorMessage.textContent = "Hubo un error al cargar los datos.";
        document.body.appendChild(errorMessage);
        console.log(error);
    })
    //Añado la imagen de fondo con metodo js.
    document.getElementById('body').style.backgroundImage= 'url(img/fondo01.webp)';//intento 4.
})
//Busco la informacion del pokemon.
function searchPo(url){
    fetch(url)
    .then(response=> response.json())
    .then(data=>{
        showPo(data)
    })
}
//Guardo el pokémon por si lo quiero agregar al equipo.
let addToTeam;
//Muestro imagen del pokémon.
function showPo(data){
    showPi(data);
    let screen = document.getElementById('show');
    addToTeam= data;
    screen.innerHTML = `<img id="imgS" src='${data.sprites.front_default}'>`;
    //console.log(addToTeam);
}
//Muestro lista de pokémons.
function displayList(data){
    let listDiv = document.getElementById('poke-list');
    for(let one of data){
        //console.log(one);
        listDiv.innerHTML+= `<div class="poke" onclick="searchPo('${one.url}')"><p>`+one.name.toUpperCase()+'</p></div>';
    }
}
//Muestro datos del pokémon seleccionado.
function showPi(data){
    let infoS = document.getElementById('infoT');
    infoS.innerHTML = "";
    for(let one of data.stats){
        infoS.innerHTML += `
        <tr>
        <th>${one.stat.name.toUpperCase()}</th>
        </tr>
        <tr>
        <td>${one.base_stat}</td>
        </tr>`;
    }
}
//Escucho el click en el boton para agregar al equipo.
let counterT = 0;
document.getElementById('add').addEventListener('click', ()=>{
    let teamS = document.getElementById('teamS');
    if(counterT < 6){
        teamS.innerHTML += `
        <div class='team' id='${addToTeam.name}'>
        <img src='${addToTeam.sprites.front_default}'>
        <button type='button' class='delB' onclick="removeP('${addToTeam.name}')">X</>
        </div>`;
        counterT+=1;
    }
})
//Remueve un pokémon de la lista.
function removeP(id){
    let item = document.getElementById(id);
    item.remove();
    counterT-=1;
}
//Envio usuario "nombre", "apellido", "fecha de nacimiento".
const URL_Post = `https://jsonplaceholder.typicode.com/users`;
let sendBtn = document.getElementById('submit');
sendBtn.addEventListener('click', ()=>{
    //Cargo valores actualizados del registro.
    let name = document.getElementById('name');
    let lastname = document.getElementById('lastname');
    let date = document.getElementById('date');
    //Compruebo que los campos no sean null.
    if(name.value!=""&&lastname.value!=""&&date.value!=""){
        sendData(URL_Post);
        //console.log("Hay datos para enviar: "+"nombre: "+name.value+". apellido: "+lastname.value+". fecha: "+date.value);
        name.value= null;
        lastname.value= null;
        date.value= null;
    }else{
        console.log("No puede haber campos vacíos, vuelva a intentarlo");
    }
    //Fetch post con la informacion del formulario.
    function sendData(url){
        fetch(url, {
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: 'POST',
            body: JSON.stringify({
                nombre: name.value,
                apellido: lastname.value,
                fecha_de_nacimiento: date.value
            })
        })
        .then(response=> response.json())
        .then(data=> {
            document.getElementById('responseS').innerHTML=null;
            console.log(data);
            returnData(data)
        })
        .catch(error=> console.log(error))
    }
})
//Mostrar respuesta del envio.
function returnData(data){
    let screen = document.getElementById('responseS');
    //Cargo los datos de respuesta y los muestro.
    screen.innerHTML+=`
    <div id='resD'>
        <p>Se envió la informacion correctamente.</p>
        <p>Nombre: ${data.nombre}</p>
        <p>Apellido: ${data.apellido}</p>
        <p>Fecha de nacimiento: ${data.fecha_de_nacimiento}</p>
    </div>
    `
}
//Hecho por: Martín Pereira.