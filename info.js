let params = new URLSearchParams(window.location.search);
let id = Number(params.get('id'));

fetch(`https://brasilapi.com.br/api/ibge/uf/v1/${id}`)

  .then(response => {
    return response.json();
  })

  .then(data => {
    let table = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    let image = document.getElementById("img");

    let linha = table.insertRow()

    let cell1 = linha.insertCell(0)
    let cell2 = linha.insertCell(1)
    let cell3 = linha.insertCell(2)
    let cell4 = linha.insertCell(3)

    cell1.innerHTML = data.id
    cell2.innerHTML = data.sigla
    cell3.innerHTML = data.nome
    cell4.innerHTML = data.regiao.nome
console.log(id)
    switch (id) {
      case 11:
        image.setAttribute('src', './Bandeiras/Bandeira_de_Rondonia-300x210.png');
        break;
      case 12:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Acre-300x210.png');
        break;
      case 13:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Amazonas-300x214.png');
        break;
      case 14:
        image.setAttribute('src', './Bandeiras/Bandeira_de_Roraima-300x200.png');
        break;
      case 15:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Para-300x200.png');
        break;
      case 16:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Amapa-300x210.png');
        break;
      case 17:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Tocantins-300x210.png');
        break;
      case 21:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Maranhao-300x200.png');
        break;
      case 22:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Piaui-300x200.png');
        break;
      case 23:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Ceara-300x210.png');
        break;
      case 24:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Rio_Grande_do_Norte-300x200.png');
        break;
      case 25:
        image.setAttribute('src', './Bandeiras/Bandeira_da_Paraiba-300x210.png');
        break;
      case 26:
        image.setAttribute('src', './Bandeiras/Bandeira_de_Pernambuco-300x210.png');
        break;
      case 27:
        image.setAttribute('src', './Bandeiras/Bandeira_de_Alagoas-300x200.png');
        break;
      case 28:
        image.setAttribute('src', './Bandeiras/Bandeira_de_Sergipe-300x210.png');
        break;
      case 29:
        image.setAttribute('src', './Bandeiras/Bandeira_da_Bahia-300x200.png');
        break;
      case 31:
        image.setAttribute('src', './Bandeiras/Bandeira_de_Minas_Gerais-300x210.png');
        break;
      case 32:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Espirito_Santo-300x210.png');
        break;
      case 33:
        image.setAttribute('src', './Bandeiras/Bandeira_Rio_de_Janeiro-300x210.png');
        break;
      case 35:
        image.setAttribute('src', './Bandeiras/Bandeira_Sao_Paulo-300x200.png');
        break;
      case 41:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Parana-300x210.png');
        break;
      case 42:
        image.setAttribute('src', './Bandeiras/Bandeira_de_Santa_Catarina-300x218.png');
        break;
      case 43:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Rio_Grande_do_Sul-300x210.png');
        break;
      case 50:
        image.setAttribute('src', './Bandeiras/Bandeira_de_Mato_Grosso_do_Sul-300x210.png');
        break;
      case 51:
        image.setAttribute('src', './Bandeiras/Bandeira_de_Mato_Grosso-300x210.png');
        break;
      case 52:
        image.setAttribute('src', './Bandeiras/Bandeira_de_Goias-300x210.png');
        break;
      case 53:
        image.setAttribute('src', './Bandeiras/Bandeira_do_Distrito_Federal_Brasil-300x210.png');
        break;
      default:
        console.log('Estado não encontrado');
    }
  })  
