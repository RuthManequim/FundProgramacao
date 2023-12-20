function iniciarConversao() {
    var medidaMetros = parseFloat(prompt("Digite uma distância em metros (m):")); 

    if (isNaN(medidaMetros)) {
        alert("Por favor, insira um valor válido.");
        return;
    } 

    var quilometros = medidaMetros / 1000;
    var hectometros = medidaMetros / 100;
    var decametros = medidaMetros / 10;
    var decimetros = medidaMetros * 10;
    var centimetros = medidaMetros * 100;
    var milimetros = medidaMetros * 1000; 

    var resultado = "Conversão:\n\n";
    resultado += "Quilômetros: " + quilometros + " km\n";
    resultado += "Hectômetros: " + hectometros + " hm\n";
    resultado += "Decametros: " + decametros + " dam\n";
    resultado += "Decímetros: " + decimetros + " dm\n";
    resultado += "Centímetros: " + centimetros + " cm\n";
    resultado += "Milímetros: " + milimetros + " mm"; 

    alert(resultado);
}