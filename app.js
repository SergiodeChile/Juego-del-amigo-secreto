let amigos = [];

function agregarAmigo() {
const nombreAmigo = document.getElementById('amigo').value;

if (nombreAmigo.trim() === '') {
    alert('Inscriba un nombre, la caja esta vacía.');
    
    return;
}
// función para validar registro eimpedir la duplicidad 
if(amigos.includes(nombreAmigo)){
    alert ("Ese nombre ya existe en la lista, escribir un nombre distinto");
    return;
}

amigos.push(nombreAmigo);
document.getElementById('amigo').value = '';
actualizarListaAmigos();
}
function limpiarLita() {
    limpiarLista = [];
}



function actualizarListaAmigos() {
const listaAmigos = document.getElementById('listaAmigos');
listaAmigos.innerHTML = '';

for (let i = 0; i < amigos.length; i++) {
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigos[i];
    listaAmigos.appendChild(nuevoAmigo);
}
}

function sortearAmigo() {
if (amigos.length === 0) {
    alert('Por el momento no hay amigos para sortear, Inscriba sus amigos.');
    return;}

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSorteado = amigos[indiceAleatorio];

document.getElementById('resultado').innerHTML = `<li>Su amigo (a) secreto es: ${amigoSorteado}</li>`;
}
//limpiarCaja() {

