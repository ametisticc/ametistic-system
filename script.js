// script.js

// Função para pausar o WhatsApp
function pausar(whatsapp) {
    const status = document.getElementById('status-' + whatsapp);
    status.textContent = 'Pausado'; // Altera o status para "Pausado"
}

// Função para retomar o WhatsApp
function retomar(whatsapp) {
    const status = document.getElementById('status-' + whatsapp);
    status.textContent = 'Ativo'; // Altera o status para "Ativo"
}

// Função para definir intervalo (por enquanto não faz nada além de exibir um alert)
function definirIntervalo(whatsapp) {
    alert('Definindo intervalo para WhatsApp ' + whatsapp);
}

// Gráfico Chart.js
window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');

    // Criando o gráfico
    var myChart = new Chart(ctx, {
        type: 'line', // Tipo de gráfico (linha)
        data: {
            labels: ['10h', '11h', '12h', '13h', '14h', '15h'], // Labels das horas (Eixo X)
            datasets: [{
                label: 'Chips Ativos', // Nome da linha (ativo)
                data: [10, 12, 15, 18, 20, 25], // Dados para chips ativos
                borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
                borderWidth: 2, // Espessura da linha
                fill: false // Não preenche a área abaixo da linha
            }, {
                label: 'Chips Pausados', // Nome da linha (pausado)
                data: [5, 6, 8, 10, 12, 14], // Dados para chips pausados
                borderColor: 'rgba(255, 99, 132, 1)', // Cor da linha
                borderWidth: 2, // Espessura da linha
                fill: false // Não preenche a área abaixo da linha
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true // Inicia o gráfico no zero
                }
            }
        }
    });
};
