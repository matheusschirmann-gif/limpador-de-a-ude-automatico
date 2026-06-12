const formulario = document.getElementById("formSimulador");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const area = Number(document.getElementById("area").value);
    const produtividade = Number(document.getElementById("produtividade").value);

    const producao = area * produtividade;

    document.getElementById("resultado").innerHTML =
        `Produção estimada: ${producao.toFixed(2)} toneladas`;
});
