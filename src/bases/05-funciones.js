//Funciones en JS
/*
const saludar = function (nombre){
    return 'Hola, ${nombre}';
}*/


const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = (nombre) => `Hola Mundo`;

const getUser = () => ({
    uid: 'ABC123',
    username: 'El__papi1502'
})
const user = getUser();

console.log(saludar2('Kenny'))
console.log(saludar3('Kenny'))
console.log(saludar4('Kenny'))
console.log(user)

//Tarea
function getUsuarioActivo(nombre){
    return{
        uid: 'ABC567',
        username: nombre
    } 

};
const usuarioActivo = getUsuarioActivo('Marcela');

console.log(usuarioActivo);
