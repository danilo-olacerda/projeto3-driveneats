let comida=0, valorComida=0;
let bebida=0, valorBebida=0;
let sobremesa=0, valorSobremesa=0;
let nome, endereco;
/* Escolher Comida*/
function escolherSmash() {
    document.getElementById("smash").className += " check-prato";
    document.getElementById("rato").className = document.getElementById("rato").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("pizza").className = document.getElementById("pizza").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("taco").className = document.getElementById("taco").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("nuggets").className = document.getElementById("nuggets").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("churrasco").className = document.getElementById("churrasco").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    comida="Smash Burguer";
    valorComida=16.50;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherRato() {
    document.getElementById("rato").className += " check-prato";
    document.getElementById("smash").className = document.getElementById("smash").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("pizza").className = document.getElementById("pizza").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("taco").className = document.getElementById("taco").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("nuggets").className = document.getElementById("nuggets").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("churrasco").className = document.getElementById("churrasco").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    comida="Sanduba de Rato";
    valorComida=100.00;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherPizza() {
    document.getElementById("pizza").className += " check-prato";
    document.getElementById("rato").className = document.getElementById("rato").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("smash").className = document.getElementById("smash").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("taco").className = document.getElementById("taco").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("nuggets").className = document.getElementById("nuggets").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("churrasco").className = document.getElementById("churrasco").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    comida="Pizza";
    valorComida=40.00;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherTaco() {
    document.getElementById("taco").className += " check-prato";
    document.getElementById("smash").className = document.getElementById("smash").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("pizza").className = document.getElementById("pizza").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("rato").className = document.getElementById("rato").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("nuggets").className = document.getElementById("nuggets").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("churrasco").className = document.getElementById("churrasco").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    comida="Taco";
    valorComida=11.50;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherNuggets() {
    document.getElementById("nuggets").className += " check-prato";
    document.getElementById("rato").className = document.getElementById("rato").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("pizza").className = document.getElementById("pizza").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("taco").className = document.getElementById("taco").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("smash").className = document.getElementById("smash").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("churrasco").className = document.getElementById("churrasco").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    comida="Nuggets";
    valorComida=21.90;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherChurrasco() {
    document.getElementById("churrasco").className += " check-prato";
    document.getElementById("smash").className = document.getElementById("smash").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("pizza").className = document.getElementById("pizza").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("taco").className = document.getElementById("taco").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("nuggets").className = document.getElementById("nuggets").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("rato").className = document.getElementById("rato").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    comida="Churrasco";
    valorComida=25.00;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
/* Escolher Bebida*/
function escolherCoca() {
    document.getElementById("coca").className += " check-prato";
    document.getElementById("sprite").className = document.getElementById("sprite").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("tamarindo").className = document.getElementById("tamarindo").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("cha").className = document.getElementById("cha").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("terra").className = document.getElementById("terra").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("yakult").className = document.getElementById("yakult").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    bebida="Coca lata";
    valorBebida=3.90;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherSprite() {
    document.getElementById("sprite").className += " check-prato";
    document.getElementById("coca").className = document.getElementById("coca").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("tamarindo").className = document.getElementById("tamarindo").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("cha").className = document.getElementById("cha").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("terra").className = document.getElementById("terra").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("yakult").className = document.getElementById("yakult").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    bebida="Sprite lata";
    valorBebida=3.00;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherTamarindo() {
    document.getElementById("tamarindo").className += " check-prato";
    document.getElementById("sprite").className = document.getElementById("sprite").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("coca").className = document.getElementById("coca").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("cha").className = document.getElementById("cha").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("terra").className = document.getElementById("terra").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("yakult").className = document.getElementById("yakult").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    bebida="Suco de tamarindo";
    valorBebida=30.00;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherCha() {
    document.getElementById("cha").className += " check-prato";
    document.getElementById("sprite").className = document.getElementById("sprite").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("tamarindo").className = document.getElementById("tamarindo").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("coca").className = document.getElementById("coca").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("terra").className = document.getElementById("terra").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("yakult").className = document.getElementById("yakult").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    bebida="Chá gelado";
    valorBebida=8.00;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherTerra() {
    document.getElementById("terra").className += " check-prato";
    document.getElementById("sprite").className = document.getElementById("sprite").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("tamarindo").className = document.getElementById("tamarindo").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("cha").className = document.getElementById("cha").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("coca").className = document.getElementById("coca").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("yakult").className = document.getElementById("yakult").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    bebida="Suco de terra";
    valorBebida=1.00;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherYakult() {
    document.getElementById("yakult").className += " check-prato";
    document.getElementById("sprite").className = document.getElementById("sprite").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("tamarindo").className = document.getElementById("tamarindo").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("cha").className = document.getElementById("cha").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("terra").className = document.getElementById("terra").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("coca").className = document.getElementById("coca").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    bebida="Yakult";
    valorBebida=0.50;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
/* Escolher Sobremesa*/
function escolherAcai() {
    document.getElementById("acai").className += " check-prato";
    document.getElementById("sorvete").className = document.getElementById("sorvete").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("minhoca").className = document.getElementById("minhoca").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("pudim").className = document.getElementById("pudim").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("alfajor").className = document.getElementById("alfajor").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("banana").className = document.getElementById("banana").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    sobremesa="Açai";
    valorSobremesa=10.00;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherSorvete() {
    document.getElementById("sorvete").className += " check-prato";
    document.getElementById("acai").className = document.getElementById("acai").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("minhoca").className = document.getElementById("minhoca").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("pudim").className = document.getElementById("pudim").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("alfajor").className = document.getElementById("alfajor").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("banana").className = document.getElementById("banana").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    sobremesa="Sorteve";
    valorSobremesa=11.90;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherMinhoca() {
    document.getElementById("minhoca").className += " check-prato";
    document.getElementById("acai").className = document.getElementById("acai").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("sorvete").className = document.getElementById("sorvete").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("pudim").className = document.getElementById("pudim").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("alfajor").className = document.getElementById("alfajor").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("banana").className = document.getElementById("banana").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    sobremesa="Minhoca Doce";
    valorSobremesa=15.90;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherPudim() {
    document.getElementById("pudim").className += " check-prato";
    document.getElementById("acai").className = document.getElementById("acai").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("sorvete").className = document.getElementById("sorvete").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("minhoca").className = document.getElementById("minhoca").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("alfajor").className = document.getElementById("alfajor").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("banana").className = document.getElementById("banana").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    sobremesa="Pudim";
    valorSobremesa=20.90;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherAlfajor() {
    document.getElementById("alfajor").className += " check-prato";
    document.getElementById("acai").className = document.getElementById("acai").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("sorvete").className = document.getElementById("sorvete").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("pudim").className = document.getElementById("pudim").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("minhoca").className = document.getElementById("minhoca").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("banana").className = document.getElementById("banana").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    sobremesa="Alfajor";
    valorSobremesa=5.00;
    if (comida!=0 && bebida !=0 && sobremesa !=0){
        botaoConfirmacao();
    }
}
function escolherBanana() {
    document.getElementById("banana").className += " check-prato";
    document.getElementById("acai").className = document.getElementById("acai").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("sorvete").className = document.getElementById("sorvete").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("pudim").className = document.getElementById("pudim").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("alfajor").className = document.getElementById("alfajor").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    document.getElementById("minhoca").className = document.getElementById("minhoca").className.replace( /(?:^|\s)check-prato(?!\S)/g , '' );
    sobremesa="Banana";
    valorSobremesa=2.00;
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

    nome = prompt("Qual o seu nome completo ?");
    endereco = prompt("Qual o seu endereço ?");

    document.getElementById("comida-final").innerHTML = comida;
    document.getElementById("comida-valor").innerHTML = valorComida;

    document.getElementById("bebida-final").innerHTML = bebida;
    document.getElementById("bebida-valor").innerHTML = valorBebida;

    document.getElementById("sobremesa-final").innerHTML = sobremesa;
    document.getElementById("sobremesa-valor").innerHTML = valorSobremesa;

    document.getElementById("valor-total").innerHTML = "R$ "+ valor;

    document.getElementById("tela-final").className += " flex";
    document.getElementById("checkout").className += " aparecer";
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
    \n\nNome: ${nome}
    Endereço: ${endereco}`
    string = encodeURIComponent(string);
    window.open("https://wa.me/5532991745402?text="+string);
}