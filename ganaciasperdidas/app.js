//Ingresos
var income = prompt("¿Cuanto es el ingreso?");//400
//Costos
var cost= prompt("¿Cuanto es el costo?");//65
//Porcentaje de impues
var taxPercent = prompt("¿Cuanto es el porcentaje de impuestos?");//18
//Ganancia bruta
var grossProfit = income - cost;//335
//Obt Cant
var tax = grossProfit*taxPercent/100;//60.3
//Ganancia neta
var netIncome = grossProfit - tax;
//Mostrar en doc
document.write("Tu ganancia neta es $ " + netIncome);

prompt("SAL CON UNA CHINGADA!");
