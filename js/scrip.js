// function verificaPalavra() {
//     const palavraCerta = "Alma Perdida";
//     const inputPalavra = document.getElementById("input-palavra").value.trim().toLowerCase();


//     if (inputPalavra === palavraCerta){
//         localStorage.setItem("palavra1", "acertada");
//         alert("Você acertou a primeira palavra!");
//         atualizarStatus();
//     } else {
//         alert("a palavra-chave não é essa. Tente Novamente")
//     }
// }

// function atualizarStatus(){
//     const progressoPalavra1 = localStorage.getItem("palavra1");

//     if (progressoPalavra1 === "acertada") {
//         console.log("você já descobriu a primeira palavra")
//     } else{
//         console.log("a primeira palavra ainda não foi acertada")
//     }

//     window.onload = function() {
//         atualizarStatus();
//     }
// }

function initEnigma({id, palavraChave, proximo}){
    const input = document.getElementById("input-palavra");
    const check = document.getElementById("checar");

    if (localStorage.getItem(id) === "completado"){
        alert("Você já Completou este enigma! Redirecionando...");
        localStorage.setItem(id, "completado");
        setTimeout(() => window.location.href = proximo, 2000);
        return;
    }

    checar.addEventListener("click", () => {
        const resposta = input.value.trim().toLowerCase();
        if (resposta === palavraChave) {
            alert("Resposta Correta! Redirecionando...");
            localStorage.setItem(id, "completado");
            setTimeout(() => window.location.href = proximo, 2000)
        } else{
            alert("Resposta incorreta. Tente Novamente")
        }
    })
    document.querySelector("#reset").addEventListener("click", function() {
        if (confirm("Tem certeza que deseja resetar o progresso?")){
            localStorage.clear();
            alert("Progresso resetado! Você será redirecionado ao início.");
            window.location.href = "index.html"
        }
    });
}