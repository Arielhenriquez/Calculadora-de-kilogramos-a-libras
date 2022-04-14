/* //Parametro Rest
function person(firstname, lastname, ...otherinfo) {
    return otherinfo;
}
let informacion = person("Waldis", "Henriquez", "Parametro rest: " + "Frontend developer", " Backend developer", " Fullstack developer");
document.getElementById("otherinfo").innerHTML = informacion;

const { firstName, lastName, ...otherInfo } = {
    firstName: "Waldis",
    lastName: "Henriquez",
    companyName: "Bravo",
    profession: "Web Developer",
    gender: "Male"
}

// Llamando la variable otherInfo:
console.log(otherInfo);

//Parametro Spread
const letras = "abcdario";
document.getElementById("otherinfo2").innerHTML = "Parametro spread: " + [...letras];

const biography = {
    ...letras,
    hobby: "Listen Music",
    time: 20,
};

console.log(biography);

//Clases en Javascript
let cat = class Animal {
    constructor(raza, edad) {
        this.raza = raza;
        this.edad = edad;
    }
}

const gato = new cat("Gato blanco", 20);
console.log(gato);*/

//Calcular peso de kg a lb inicio
let calculo = document.getElementById("Calculo");
calculo.addEventListener("click", calcularPeso) 

//Metodos de clases. 
function calcularPeso() {
    const libras = 2.2046;
    let kilogramos = document.getElementById("kilogramos").value;
    let calculo = class ConvertirPeso {
        get Mass() {
            return this.calcMass();
        }
        calcMass() {
            return kilogramos * libras;
        }
    }
    const nuevoPeso = new calculo();
    document.getElementById("libras").value = nuevoPeso.Mass;
}

const limpiar = () => {
    document.getElementById("kilogramos").value = "";
    document.getElementById("libras").value = "";
}

let borrar = document.getElementById("Limpiar");
borrar.addEventListener("click", limpiar);
//Fin

/* //Static
class Calculo {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    static sumar(a, b) {
        const calculo = a.num1 + a.num2;
        return calculo;
    }
}
const suma1 = new Calculo(5, 10);
const suma2 = new Calculo(10, 15);
console.log(Calculo.sumar(suma1));


class SerVivo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    presentation() {
        console.log("El nombre de esta persona es: " + this.name + " Y su edad es: " + this.age);
    }
}

class Persona extends SerVivo {
    presentation() {
        super.presentation();
        console.log("Hola " + this.name)
    }
}

let persona1 = new Persona("Raul", 22);
persona1.presentation(); */