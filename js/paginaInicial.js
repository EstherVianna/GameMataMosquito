function iniciarJogo(){
    var nivel = document.querySelector("#nivel").value

    if (nivel === "s"){
        alert("Selecione um nivel para iniciar o jogo!")
        return false
    }
    window.location.href = "game.html?" + nivel;
}

function voltarAoInicio(){
    window.location.href = "index.html"
 }

