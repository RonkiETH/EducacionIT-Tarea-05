//Ejercicio 1

let ej1CantidadDeGatos = 30;
let gatos = "😹";

for (let i = 1; i <= ej1CantidadDeGatos; i++) {
    if(gatos == "😺"){
        gatos ="😸";}
    else if(gatos == "😸"){
        gatos ="😹";}
    else if (gatos =="😹"){
        gatos ="😺";
    }
    console.log("Gato #" + i + gatos)
}

//Ejercicio 2

//Solo cambiar los datos de abajo:
let ej2CantidadDeGatos = 7;
let ej2CantidadDePasos = 5;
//Solo cambiar los datos de arriba:

let emojiGato = "🐈"
let emojiPasos = "🐾"
let ej2CantidadDePasosRepetidos = emojiPasos.repeat(ej2CantidadDePasos);

for (let i = 0; i < ej2CantidadDeGatos; i++) {
    console.log("Gato #" + (i+1) + ": " + emojiGato + " " + ej2CantidadDePasosRepetidos);
}

//Ejercicio 3
//Reutilizamos las variables del ejercicio 2 y cambiamos algunas

//Solo cambiar los datos de abajo:
let ej3CantidadDeGatos = 5;
let ej3CantidadDePasos = 5;
//Solo cambiar los datos de arriba:

let emojiGatoNegro = "🐈‍⬛"
let ej3CantidadDePasosRepetidos = emojiPasos.repeat(ej3CantidadDePasos);

for (let i = 0; i < ej3CantidadDeGatos; i++) {
    if (i % 2 ) {
        console.log("Gato #" + [i + 1] + " " + emojiGatoNegro + " " + ej3CantidadDePasosRepetidos);
    }else {
        console.log("Gato #" + [i + 1] + " " + emojiGato + " " + ej3CantidadDePasosRepetidos);
    }

}