```javascript
let distancia = 0;

// Busca o endereço pelo CEP
async function buscarCEP() {

    let cep = document.getElementById("cep").value;

    let resposta = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
    );

    let dados = await resposta.json();

    document.getElementById("endereco").innerHTML =
        dados.logradouro + ", " +
        dados.bairro + " - " +
        dados.localidade + "/" +
        dados.uf;
}


// Calcula o frete
function calcularFrete() {

    // Exemplo de distância
    distancia = 10;

    // Simulação do Uber Moto
    let uber = 6 + (distancia * 2);

    // Frete final
    let frete = uber + 3;

    document.getElementById("resultado").innerHTML =
        "Distância: " + distancia + " km<br>" +
        "Uber Moto: R$ " + uber.toFixed(2) + "<br>" +
        "Frete: R$ " + frete.toFixed(2);
}
```
