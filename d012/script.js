function precoMudou() {
    var antigo = parseFloat(prompt('Qual era o preço antigo do produto?:'));
    var atual = parseFloat(prompt('Qual é o preço atual do produto?:'));

    if (isNaN(antigo) || isNaN(atual)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    var diferenca = atual - antigo;
    var percentual = (diferenca / antigo) * 100;

    var resultadoText = "O produto custava R$" + antigo.toFixed(2) + " e agora custa R$" + atual.toFixed(2) + "\n";

    if (diferenca > 0) {
        resultadoText += "Hoje o produto está mais caro.\n";
        resultadoText += "O preço subiu R$" + diferenca.toFixed(2) + ", o que representa um aumento de " + percentual.toFixed(2) + "%.\n";
        resultadoText += "A variação foi de " + diferenca.toFixed(2) + " para cima.";
    } else if (diferenca < 0) {
        resultadoText += "Hoje o produto está mais barato.\n";
        resultadoText += "O preço baixou R$" + Math.abs(diferenca).toFixed(2) + ", o que representa uma queda de " + Math.abs(percentual).toFixed(2) + "%.\n";
        resultadoText += "A variação foi de " + Math.abs(diferenca).toFixed(2) + " para baixo.";
    } else {
        resultadoText += "O preço do produto permanece o mesmo.";
    }
    alert(resultadoText);
}