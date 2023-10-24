//Criando/declarando a funçao tocaSom com parẫmetro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//criando referência constante ListaDeTeclas buscando todos
const listaDeTeclas = document.querySelectorAll('.tecla');

//criando referência variável "contador" iniciando = 0
let contador = 0;

//estrutura de repetição "while" significa "enquanto algo acontecer"
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idElementoAudio = "#som_"+efeito;
     listaDeTeclas[contador].onclick = function(){
        tocaSom (idElementoAudio);
     }
     contador = contador + 1;

     console.log(contador);
    }


