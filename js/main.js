 const controle = document.querySelectorAll("[data-controle]");
 const estatisticas = document.querySelectorAll("[data-estatistica]");
 const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
 var nome;

 console.log(estatisticas)
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaPecas(evento.target.dataset.peca)
    })
    
});

function manipulaDados(operacao, controle){
    let peca = controle.querySelector("[data-contador]");
    if( operacao === "-"){
       peca.value = parseFloat(peca.value)-1; 
    }else if(operacao==="+"){
        peca.value =parseFloat(peca.value)+1;
    }else{
        console.log("Botão não encontrado.");
    }
}

function atualizaPecas(peca){
    console.log(pecas[peca]["velocidade"])
    estatisticas.forEach((elemento) =>{
        console.log(elemento.dataset.estatistica);
        console.log(elemento.textContent);
        elemento.textContent = parseFloat(elemento.textContent)+(pecas[peca][elemento.dataset.estatistica])
    })
}