var altura = 0;
var largura = 0;
let vidas = 1;
let tempo = 10;
let duracaoMosca = 2000;

function adaptarNivel() {
    var nivel = window.location.search;
    nivel = nivel.replace("?", "")

    if(nivel === 'medio'){
        duracaoMosca = 1500;

    }else if(nivel === 'dificil'){
        duracaoMosca = 1000;

    }
}

adaptarNivel()

function ajustarTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustarTamanhoPalcoJogo()

var cronometro = setInterval(()=>{
    tempo -= 1;

    if(tempo === 0){
        clearInterval(cronometro);
		clearInterval(criaMosquito);
        window.location.href = "vitoria.html";
    }
    document.querySelector("#tempoRestante").innerHTML = tempo;
 }, 1000);


function posicaoRandomica(){
    var imagem = document.querySelector("#v" + vidas);

    if(document.querySelector("#mosquito")){
        document.querySelector("#mosquito").remove();
            imagem.src = "imagens/coracao_vazio.png";
                vidas++;
        if(vidas > 3 ){
            window.location.href = "fim_de_jogo.html";
        }
      
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX <= 0 ? 110 : posicaoX;
    posicaoY = posicaoY <= 0 ? 110 : posicaoY;
    

    var mosquito = document.createElement("img");
    mosquito.src="imagens/mosca.png";
    mosquito.className = tamanhoAleatorio()
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = "absolute";
    mosquito.id = "mosquito";
    mosquito.onclick = function(){
        if(mosquito.onclick){
            this.remove();
        }
    }
    document.body.appendChild(mosquito);
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return "mosquito1"

        case 1:
            return "mosquito2"

        case 2: 
            return "mosquito3"
    }
 };





