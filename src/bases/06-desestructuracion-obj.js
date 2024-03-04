//Desestructuracion
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    rango: 'Soldado'
};

//const{ nombre,edad,clave } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );


const useContext = ( {clave,nombre,edad,rango='Capitan'} ) => {
    
    //console.log(nombre,edad,rango,clave);
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.2322
        }
    }
}
const { nombreClave, anios, latlng:{lat,lng} } = useContext(persona);
console.log(nombreClave,anios);
console.log(lat,lng);

//const avenger = useContext ( persona );
//console.log(avenger)