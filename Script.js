// Variáveis de controle do simulador da fazenda
let umidade = 32;
let aguaEconomizada = 0;

// Função para simular a irrigação inteligente
function irrigar() {
    if (umidade < 80) {
        umidade += 15;
        aguaEconomizada += 50; // Simula a economia por usar dados precisos em vez de regar ao acaso

        // Atualiza a tela
        document.getElementById("txt-umidade").innerHTML = `Status: <strong style="color: #4caf50;">Ideal (${umidade}%)</strong>`;
        document.getElementById("txt-agua").innerText = aguaEconomizada;

        alert("Irrigação Inteligente ativada! Solo hidratado com a quantidade exata de água.");
    } else {
        alert("O solo já está com a umidade ideal! Irrigação evitada para não desperdiçar água.");
    }
}

// Função para simular aplicação de defensivo biológico
function aplicarBio() {
    const statusTxt = document.getElementById("txt-status");
    statusTxt.innerText = "100% Protegida (Natural)";
    statusTxt.style.color = "#2e7d32";

    alert("Defensivos biológicos (inimigos naturais das pragas) aplicados com sucesso! Solo e alimentos livres de químicos pesados.");
}

// Função para validar o quiz do Agrinho
function verificarResposta(eCorreta) {
    const resultado = document.getElementById("resultado-quiz");

    if (eCorreta) {
        resultado.innerText = "🎉 Resposta Correta! A agricultura de precisão usa a tecnologia para evitar desperdícios e proteger a natureza.";
        resultado.style.color = "#2e7d32";
    } else {
        resultado.innerText = "❌ Tente novamente! Pense em como a tecnologia ajuda a preservar os recursos naturais.";
        resultado.style.color = "#d32f2f";
    }
}
