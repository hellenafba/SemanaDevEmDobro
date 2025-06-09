/*
    O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros?", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    Objetivo 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros no html e mandar poro JS
        passo 2 - escutar o clique no botao de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preco
        passo 4 - pegar cada carta, verificar se ela deve ser mostrada ou escondida
        baseaddo nos filtros que a pessoa digitou
*/

// passo 1 - pegar o botao de aplicar filtros no html e mandar poro JS 
const botaoFiltrar = document.querySelector('.btn-filtrar');
//passo 2 - escutar o clique no botao de aplicar filtros    
botaoFiltrar.addEventListener('click', function () {
    //passo 3 - pegar os valores dos campos de categoria e preco
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    //passo 4 - pegar cada carta, verificar se ela deve ser mostrada ou escondidabaseaddo nos filtros que a pessoa digitou
    const cartas = document.querySelectorAll('.carta');
    console.log(cartas);

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;
        
        let mostrarCarta = true;

        console.log('catgoriaSelecionada',categoriaSelecionada);

        const temFiltroCategoria = categoriaSelecionada !== '';

        const cartaNaoBateFiltro = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

        if(temFiltroCategoria && cartaNaoBateFiltro){
            mostrarCarta = false;

        }

        const temDePreco = precoMaximoSelecionado !== '';
        const cartaBateFiltroPrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        if(temDePreco&& cartaBateFiltroPrecoMaximo){
            mostrarCarta = false;
        };
        
        if(mostrarCarta){
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        }else{
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        };

    });
});