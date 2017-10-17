// Preguntar temperatura a Celsius por medio de Prompt 
var temperature= parseInt(prompt("¿Cuál es la temperatura en Celsius?"));
//Ok, lo lograste, ahora, se debe convertir a grados Fahrenheit
var convertToFahrenheit = (temperature*1.8) + 32;
//Muestralo en bonito en la consola
console.log("La temperatura en F°es " + convertToFahrenheit);