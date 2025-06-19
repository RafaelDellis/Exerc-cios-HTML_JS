let valor = 100;

function alterarContador(diferenca) {
    valor += diferenca;
    document.getElementById('contador').innerText = valor;
}
