async function getContent(){
    try {
        const response = await fetch('http://localhost:4567/')

        const data = await response.json()

        show(data)
        
    } catch (error) {
        console.error(error)
    }
   
}

getContent()

function criaLinha(time){
   linha = document.createElement("tr");
   tdPosicao = document.createElement("td");
   tdNome = document.createElement("td");
   tdPontos = document.createElement("td");

   tdPosicao.innerHTML = time.posicao 
   tdNome.innerHTML = time.nome
   tdPontos.innerHTML = time.pontos

   linha.appendChild(tdPosicao);
   linha.appendChild(tdNome);
   linha.appendChild(tdPontos);

   linha.classList.add("time-linha");

   return linha;
}

function show(times){

    let output = ''

    let tabela = document.getElementById("tabela-body");
    

    for(let time of times){
       

       let linha = criaLinha(time);
       
       tabela.appendChild(linha);
    }

}

const times = document.querySelectorAll(".time-linha");
console.log(times);