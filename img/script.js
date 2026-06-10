// Dados para os cards informativos
const informacoes = {
    'producao': {
        titulo: "Produção Inteligente e Forte",
        texto: "Utilizando sementes melhoradas e análise de solo em tempo real, o produtor consegue colher até 30% mais na mesma quantidade de terra, evitando o desmatamento de novas áreas."
    },
    'meio-ambiente': {
        titulo: "Preservação Ativa",
        texto: "O agro moderno protege as APPs (Áreas de Preservação Permanente). Com técnicas como o Plantio Direto, o carbono fica retido no solo em vez de ir para a atmosfera, combatendo as mudanças climáticas."
    },
    'tecnologia': {
        titulo: "Tecnologia de Precisão",
        texto: "Drones identificam pragas antes que elas se espalhem, permitindo aplicar defensivos agrícolas apenas onde é necessário. Isso reduz em até 40% o uso de insumos químicos."
    }
};

// Função para mostrar detalhes dos cards
function mostrarDetalhes(chave) {
    const painel = document.getElementById('painel-info');
    const titulo = document.getElementById('painel-titulo');
    const texto = document.getElementById('painel-texto');

    titulo.innerText = informacoes[chave].titulo;
    texto.innerText = informacoes[chave].texto;
    
    painel.classList.remove('escondido');
}

// Função para fechar o painel de detalhes
function fecharPainel() {
    const painel = document.getElementById('painel-info');
    painel.classList.add('escondido');
}

// Função do simulador de impactos
function simular(tecnica) {
    const resultado = document.getElementById('resultado-simulador');
    
    let htmlResultado = "";

    if (tecnica === 'drone') {
        htmlResultado = `
            <h3><strong>Resultado da Simulação (Drones):</strong></h3>
            <p>📈 <strong>Produtividade:</strong> +15% de eficiência na colheita.</p>
            <p>💧 <strong>Água/Insumos:</strong> Economia de até 35% devido à aplicação cirúrgica.</p>
            <p>🌱 <strong>Impacto Ambiental:</strong> Menor contaminação do solo e redução da pegada de carbono.</p>
        `;
    } else if (tecnica === 'rotacao') {
        htmlResultado = `
            <h3><strong>Resultado da Simulação (Rotação de Culturas):</strong></h3>
            <p>📈 <strong>Produtividade:</strong> Solo mais rico em nutrientes naturalmente para a próxima safra.</p>
            <p>🐛 <strong>Pragas:</strong> Redução de 50% no ciclo de pragas sem usar defensivos.</p>
            <p>🍂 <strong>Impacto Ambiental:</strong> Recuperação biológica e estrutural do solo.</p>
        `;
    } else if (tecnica === 'gotejamento') {
        htmlResultado = `
            <h3><strong>Resultado da Simulação (Irrigação por Gotejamento):</strong></h3>
            <p>📈 <strong>Produtividade:</strong> Hidratação constante e exata nas raízes das plantas.</p>
            <p>💧 <strong>Água:</strong> Economia drástica de até 60% de água em comparação à irrigação comum.</p>
            <p>🌍 <strong>Impacto Ambiental:</strong> Preservação extrema dos recursos hídricos e lençóis freáticos.</p>
        `;
    }

    resultado.innerHTML = htmlResultado;
    resultado.style.borderLeftColor = "#4caf50"; // Muda a cor da borda para verde ao ativar
}
