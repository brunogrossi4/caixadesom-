//Criando/declarando a funçao tocaSom com parẫmetro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//chamando/invocando a funçao tocaSomPom pelo clique do botão pom
document.querySelector('.tecla_pom').onclick = tocaSomPom;


//criando referência constante ListaDeTeclas buscando todos
const listaDeTeclas = document.querySelectorAll('.tecla');

//invocando a função tocaSomPom a partir do item 0, 1º botão
listaDeTeclas[0].onclick = tocaSomPom;

//criando referência variável "contador" iniciando = 0
let contador = 0;

//estrutura de repetição "while" significa "enquanto algo acontecer"
while(contador < 9){
    const efeito = listaDeTeclas[contador].classList[1];
    const idElementoAudio = "#som_"+efeito;
     listaDeTeclas[contador].onclick = function();{
        tocaSom (idElementoAudio);
     }
     contador = contador + 1;

     console.log(contador);
    }


