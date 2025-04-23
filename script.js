document.addEventListener('DOMContentLoaded', function() {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentarFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    const altoContrasteBotao = document.getElementById('alto-contraste');
    const body = document.body;
    const elementosTexto = document.querySelectorAll('h1, h2, h3, p, a, label, li');
    let tamanhoFonteAtual = 16; // Tamanho de fonte base

    botaoAcessibilidade.addEventListener('click', function() {
        opcoesAcessibilidade.classList.toggle('apresenta-lista');
    });

    aumentarFonteBotao.addEventListener('click', function() {
        tamanhoFonteAtual += 2;
        elementosTexto.forEach(elemento => {
            elemento.style.fontSize = `${tamanhoFonteAtual}px`;
        });
    });

    diminuirFonteBotao.addEventListener('click', function() {
        tamanhoFonteAtual -= 2;
        if (tamanhoFonteAtual < 10) tamanhoFonteAtual = 10; // Limite mínimo
        elementosTexto.forEach(elemento => {
            elemento.style.fontSize = `${tamanhoFonteAtual}px`;
        });
    });

    altoContrasteBotao.addEventListener('click', function() {
        body.classList.toggle('alto-contraste');
    });
});