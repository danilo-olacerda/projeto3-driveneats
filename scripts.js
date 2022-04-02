let comida=0, valorComida=0;
let bebida=0, valorBebida=0;
let sobremesa=0, valorSobremesa=0;
let nome, endereco;
/* Escolher Comida*/
function escolherPrato(elemento, valor, nome) {

    let selecioando = document.querySelector(".pratos .check-prato");

    if (selecioando!=null) {
        selecioando.classList.remove("check-prato");
    }

    elemento.classList.add("check-prato");

    comida=nome;
    valorComida=valor;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
/*Escolher Bebida*/
function escolherBebida(elemento, valor, nome) {

    let selecioando = document.querySelector(".bebidas .check-prato");

    if (selecioando!=null) {
        selecioando.classList.remove("check-prato");
    }

    elemento.classList.add("check-prato");

    bebida=nome;
    valorBebida=valor;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
/*Escolher sobremesa*/
function escolherSobremesa(elemento, valor, nome) {

    let selecioando = document.querySelector(".sobremesas .check-prato");

    if (selecioando!=null) {
        selecioando.classList.remove("check-prato");
    }

    elemento.classList.add("check-prato");

    sobremesa=nome;
    valorSobremesa=valor;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function botaoConfirmacao() {
    document.getElementById("bot-confirm").className += " aparecer";
    document.getElementById("bot-nconfirm").className += " desaparecer";
}
function confirmar() {
    let valor = valorComida+valorBebida+valorSobremesa;
    let auxC=valorComida, auxB=valorBebida, auxS=valorSobremesa;
    valor = (valor).toFixed(2);
    valor = valor.replace(".", ',');

    nome = prompt("Qual o seu nome completo ?");
    endereco = prompt("Qual o seu endereço ?");

    valorComida=(valorComida).toFixed(2);
    valorComida=valorComida.replace(".", ',')

    valorBebida=(valorBebida).toFixed(2);
    valorBebida=valorBebida.replace(".", ',')

    valorSobremesa=(valorSobremesa).toFixed(2);
    valorSobremesa=valorSobremesa.replace(".", ',')

    document.getElementById("comida-final").innerHTML = comida;
    document.getElementById("comida-valor").innerHTML = valorComida;

    document.getElementById("bebida-final").innerHTML = bebida;
    document.getElementById("bebida-valor").innerHTML = valorBebida;

    document.getElementById("sobremesa-final").innerHTML = sobremesa;
    document.getElementById("sobremesa-valor").innerHTML = valorSobremesa;

    document.getElementById("valor-total").innerHTML = "R$ "+ valor;

    document.getElementById("tela-final").className += " flex";
    document.getElementById("checkout").className += " aparecer";

    valorComida=auxC;
    valorBebida=auxB;
    valorSobremesa=auxS;
}
function voltar() {
    document.getElementById("tela-final").classList.remove("flex");
    document.getElementById("checkout").classList.remove("aparecer");
}
function enviarMensagem () {
    let string = 
    `Olá, gostaria de fazer o pedido:
- Prato: ${comida}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: R$ ${(valorBebida+valorComida+valorSobremesa).toFixed(2)}
\nNome: ${nome}
Endereço: ${endereco}`
    string = encodeURIComponent(string);
    window.open("https://wa.me/5532991745402?text="+string);
}