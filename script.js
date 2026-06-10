// Função para os Cards Interativos de Pilares
function mostrarDetalhes(pilar) {
    const painel = document.getElementById('painel-detalhes');
    const texto = document.getElementById('texto-detalhe');
    
    // Define o texto baseado no card clicado
    if (pilar === 'tecnologia') {
        texto.innerHTML = "<strong>Tecnologia:</strong> O uso de inteligência artificial e sensores meteorológicos evita o desperdício de defensivos e fertilizantes, aplicando apenas o necessário onde a planta precisa.";
    } else if (pilar === 'preservacao') {
        texto.innerHTML = "<strong>Preservacao:</strong> Manter áreas de preservação permanente (APPs) e adotar o plantio direto protege os rios contra o assoreamento e reduz a emissão de carbono.";
    } else if (pilar === 'economia') {
        texto.innerHTML = "<strong>Economia Circular:</strong> Resíduos da pecuária viram biogás e biofertilizantes, gerando energia limpa para a própria fazenda e reduzindo custos operacionais.";
    }
    
    // Destaca o painel
    painel.style.backgroundColor = "#d8f3dc";
}

// Função para o Simulador de Impacto
function simular(tipo) {
    const prod = document.getElementById('produtividade');
    const agua = document.getElementById('agua');
    const solo = document.getElementById('solo');
    
    if (tipo === 'tradicional') {
        prod.innerText = "Padrão (100%)";
        prod.style.color = "#555";
        
        agua.innerText = "Alto Gasto (+30%)";
        agua.style.color = "#e63946";
        
        solo.innerText = "Desgaste Moderado";
        solo.style.color = "#e63946";
    } else if (tipo === 'sustentavel') {
        prod.innerText = "Alta Eficiência (+15%)";
        prod.style.color = "#2a9d8f";
        
        agua.innerText = "Economia de 40%";
        agua.style.color = "#2a9d8f";
        
        solo.innerText = "Solo Protegido e Rico";
        solo.style.color = "#2a9d8f";
    }
}
