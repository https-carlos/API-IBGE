fetch('https://brasilapi.com.br/api/ibge/uf/v1')
  .then(response => {
    // Recebemos uma resposta. Vamos pedir para transformá-la em JSON.
    return response.json();
  })

  .then(data => {

    for (let i = 0; i < data.length; i++){
      let table = document.getElementById("tabela").getElementsByTagName('tbody')[0];

        let linha = table.insertRow()
        let cell1 = linha.insertCell(0)
        let cell2 = linha.insertCell(1)
        let cell4 = linha.insertCell(2)


        cell1.innerHTML = data[i].id
        cell2.innerHTML = data[i].nome
        cell4.innerHTML = `<a href="./informacoes.html?id=${data[i].id}" class="btn btn-primary">Mais informações</a>`
    }
  })
