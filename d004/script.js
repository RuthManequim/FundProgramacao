function comprarProduto(){
    var produto = prompt("Qual produto você está comprando?");
    var preco = prompt("Quanto custa "+produto+" que você está comprando?");
    var valPago = prompt("Qual o valor dado para pagar "+produto+"?");
    var troco = valPago-preco;

    alert("Você comprou um(a) "+produto+", que custou R$ "+preco+
    ".\nVocê deu R$ "+valPago+" em dinheiro e vai receber R$ "+troco.toFixed(2)+
    " de troco. \nVolte sempre!")
}