function reajuste(){
    var nome = prompt("Qual o nome do funcionario?");
    var salAnt = parseFloat(prompt("Qual o salário de "+nome+"?"));
    var reajuste = parseFloat(prompt("O salário de "+nome+" vai ser reajustado em qual porcentagem?"));

    var salAtual = salAnt + salAnt*reajuste/100;

    document.getElementById("p").innerHTML = "<h2>"+nome+" recebeu um aumento salarial! <h2>";

    var style = document.createElement('style');
    style.type = 'text/css';

    var css = `
        #resultado {
            margin: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f4f4f4;
            font-family: verdana;
        }
        h2 {
            color: black;
        }
        p {
            color: black;
        }
    `;
    
    if (style.styleSheet) {
       
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.head.appendChild(style);

    document.body.innerHTML += `
        <div id="resultado">
            <p>O salário antigo era R$ ${salAnt.toFixed(2)}. </p>
            <p>Com um aumento de ${reajuste}%, o salário vai aumentar em R$ ${(salAtual-salAnt).toFixed(2)}. </p>
            <p>O salário atual é R$ ${salAtual.toFixed(2)}.</p>
        </div>
    `;
}