var timeId = null;

function iniciaJogo() {
    alert('Jogo iniciado.');

    var url = window.location.search;

    var nivel_jogo = url.replace('?', '');

    var tempo = 0;

    if (nivel_jogo == 1) {
        tempo = 120;
    } else if (nivel_jogo == 2) {
        tempo = 60;
    } else {
        tempo = 30;
    }

    document.getElementById('cronometro').innerHTML = tempo;


    var qtd_baloes = 80;

    cria_baloes(qtd_baloes);

    document.getElementById('baloes').innerHTML = qtd_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;

    contagem_tempo(tempo + 1);

}

function contagem_tempo(tempo) {

    tempo--;

    if (tempo == -1) {
        clearTimeout(timeId);
        game_over();
        return false;
    }

    document.getElementById('cronometro').innerHTML = tempo;

    timeId = setTimeout('contagem_tempo(' + tempo + ')', 1000);

}

function game_over() {
    alert('Você não conseguiu estourar todos os balões.');
}

function cria_baloes(qtd) {
    var cenario = document.getElementById('cenario');
    for (i = 0; i < qtd; i++) {
        var balao = document.createElement('img');

        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.onclick = function() { estourar(this) };

        cenario.appendChild(balao);
    }
}

function estourar(e) {
    e.src = 'imagens/balao_azul_pequeno_estourado.png';
    e.onclick = null;

    pontuacao(1);
}

function pontuacao(acao) {
    var baloes_inteiros = parseFloat(document.getElementById('baloes').innerHTML);
    var baloes_estourados = parseFloat(document.getElementById('baloes_estourados').innerHTML);

    baloes_estourados++;

    baloes_inteiros--;

    document.getElementById('baloes').innerHTML = baloes_inteiros;


    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

    if (baloes_inteiros == 0) {
        alert('Parabéns, você estourou todos os balões!!');
        parajogo();
    }
}

function parajogo() {
    clearTimeout(timeId);
}