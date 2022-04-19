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

    if (kilogramos == "" || libras == "") {
        let validate = document.getElementById('validate');
        validate.innerHTML = "El campo no puede estar vacio";
    }
}

const limpiar = () => {
    document.getElementById("kilogramos").value = "";
    document.getElementById("libras").value = "";
    let validate = document.getElementById('validate');
    validate.innerHTML = "";
}

let borrar = document.getElementById("Limpiar");
borrar.addEventListener("click", limpiar);

function Numeros(string) {//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos

    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            //Se añaden a la salida los caracteres validos
            out += string.charAt(i);

    //Retornar valor filtrado
    return out;
}

//Fin
