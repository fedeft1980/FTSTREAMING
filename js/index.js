let instituo = 'Teclab';
let numero =1980
const arrayfrutas=['pomelo', 'NAranja', 'Limon', 'frambuesa', 'Cerezas'];
console.log(instituo);
console.log(numero);    
console.table(arrayfrutas);
function iterarArrayFrutas(){
    for (let i = 0; i <arrayfrutas.length; i++){
        if (i === 1 || i === 5) {
            continue; // Salta la iteración
        }                   
        console.log(arrayfrutas[i]);
    }
    iterarArrayFrutas();
}

const saludar = () => {

    console.log('Hola desde la función saludar');
}
saludar();

let nombre = 'Teclabers';

const saludar2 = (param) => {
    console.log(`Hola ${param}`);
}

saludar2(nombre);

const dividirNumeros = (num1, num2) => numA / numB;
}
const resultado = dividirNumeros(10, 2);
console.log(resultado);
const saludar3 = param => console.log("Hola" +param)

const iterarArrayFrutas = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (i === 1 || i === 3) {
            continue; // Salta la iteración
        }
        console.log(array[i]);
    }
}
let persona
    const persona = {
        nombre: 'federico',  
        apellido: 'TOrres',
        edad: 44,
        profesion: 'Desarrollador',
        estimarAnioNaciminento: function() {
            return 2025 - this.edad;

        }
        
    };  
    persona.estimarAnioNaciminento()

    function Persona(nombre, apellido, edad, profesion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.profesion = profesion;
        this.estimarAnioNaciminento = function() {
            return 2025 - parseInt(this.edad);
        }
    }