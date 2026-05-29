const inputProd = document.getElementById('producao');
const inputPres = document.getElementById('preservacao');
const resBox = document.getElementById('resultado');

function atualizarSimulacao() {
    const prod = parseInt(inputProd.value);
    const pres = parseInt(inputPres.value);
    
    document.getElementById('val-producao').innerText = prod;
    document.getElementById('val-preservacao').innerText = pres + "%";

    // Lógica de equilíbrio: Muita produção com pouca preservação é ruim.
    if (prod > 70 && pres < 30) {
        resBox.innerText = "⚠️ Alerta: Produção alta, mas risco ambiental crítico!";
        resBox.className = "status-box alerta";
    } else if (pres >= 20 && prod >= 40) {
        resBox.innerText = "✅ Equilíbrio Perfeito: Agro Forte e Sustentável!";
        resBox.className = "status-box sucesso";
    } else {
        resBox.innerText = "Analisando dados do campo...";
        resBox.className = "status-box";
    }
}

inputProd.addEventListener('input', atualizarSimulacao);
inputPres.addEventListener('input', atualizarSimulacao);