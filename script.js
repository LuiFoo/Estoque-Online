let produto = [
    { id: 1, codigo: "01", unidade: "UN", preco: "1000", estoque: 100, estoquemin: 40, descricao: "Produto 1" },
    { id: 2, codigo: "02", unidade: "UN", preco: "1000", estoque: 99, estoquemin: 40, descricao: "Produto 1" },
    { id: 3, codigo: "02", unidade: "UN", preco: "1000", estoque: 90, estoquemin: 40, descricao: "Produto 1" },
    { id: 4, codigo: "02", unidade: "UN", preco: "1000", estoque: 89, estoquemin: 40, descricao: "Produto 1" },
    { id: 5, codigo: "02", unidade: "UN", preco: "1000", estoque: 80, estoquemin: 40, descricao: "Produto 1" },
    { id: 6, codigo: "02", unidade: "UN", preco: "1000", estoque: 79, estoquemin: 40, descricao: "Produto 1" },
    { id: 7, codigo: "02", unidade: "UN", preco: "1000", estoque: 70, estoquemin: 40, descricao: "Produto 1" },
    { id: 8, codigo: "02", unidade: "UN", preco: "1000", estoque: 69, estoquemin: 40, descricao: "Produto 1" },
    { id: 9, codigo: "02", unidade: "UN", preco: "1000", estoque: 60, estoquemin: 40, descricao: "Produto 1" },
    { id: 10, codigo: "02", unidade: "UN", preco: "1000", estoque: 50, estoquemin: 40, descricao: "Produto 1" },
    { id: 11, codigo: "02", unidade: "UN", preco: "1000", estoque: 49, estoquemin: 40, descricao: "Produto 1" },
    { id: 12, codigo: "02", unidade: "UN", preco: "1000", estoque: 30, estoquemin: 40, descricao: "Produto 1" },
    { id: 13, codigo: "02", unidade: "UN", preco: "1000", estoque: 29, estoquemin: 40, descricao: "Produto 1" },
    { id: 14, codigo: "02", unidade: "UN", preco: "1000", estoque: 20, estoquemin: 40, descricao: "Produto 1" },
    { id: 15, codigo: "02", unidade: "UN", preco: "1000", estoque: 19, estoquemin: 40, descricao: "Produto 1" },
    { id: 16, codigo: "02", unidade: "UN", preco: "1000", estoque: 10, estoquemin: 40, descricao: "Produto 1" },
    { id: 17, codigo: "02", unidade: "UN", preco: "1000", estoque: 0, estoquemin: 40, descricao: "Produto 1" }
];

function carregarItens() {
    const localCarregamento = document.querySelector("#section__main__itens");
    localCarregamento.innerHTML = ''

    produto.forEach(item => {
        // Criar li para o item
        const li = document.createElement("li");
        li.classList.add('section__main__item');
        li.setAttribute('data-id', item.id); // Adiciona o ID do produto como um atributo de dados

        // Adiciona os parágrafos de ID e Descrição
        const paragrafoID = document.createElement('p');
        paragrafoID.textContent = item.id;
        const paragrafoDescricao = document.createElement('p');
        paragrafoDescricao.textContent = item.descricao;

        // Botões Editar e Deletar com imagens
        const botaoEditar = criarBotao('./src/images/editar.svg', 'Editar', () => editarProduto(item.id));
        const botaoDeletar = criarBotao('./src/images/deletar.svg', 'Deletar', () => deletarProduto(item.id));

        // Adiciona as informações do produto
        const paragrafoCodigo = document.createElement('p');
        paragrafoCodigo.textContent = item.codigo;
        const paragrafoUnidade = document.createElement('p');
        paragrafoUnidade.textContent = item.unidade;
        const paragrafoPreco = document.createElement('p');
        paragrafoPreco.textContent = item.preco;
        const paragrafoEstoque = document.createElement('p');
        paragrafoEstoque.textContent = item.estoque;
        const paragrafoEstoqueMin = document.createElement('p');
        paragrafoEstoqueMin.textContent = item.estoquemin;

        const sinalArmazenamento = document.createElement('img');

        if (item.estoque >= (item.estoquemin * 2)) {
            sinalArmazenamento.src = './src/images/reVerdeEscuro.svg'; // Quando o estoque for >= 2 vezes o estoque mínimo
        } else if (item.estoque >= item.estoquemin && item.estoque < (item.estoquemin * 2)) {
            sinalArmazenamento.src = './src/images/reVerdeClaro.svg'; // Quando o estoque for >= estoque mínimo, mas < 2 vezes o estoque mínimo
        } else if (item.estoque > 0 && item.estoque < item.estoquemin) {
            sinalArmazenamento.src = './src/images/reLaranja.svg'; // Quando o estoque for maior que 0, mas menor que o estoque mínimo
        } else {
            sinalArmazenamento.src = './src/images/reVermelho.svg'; // Quando o estoque for 0
        }
        
        

        // Adiciona todos os elementos à li
        li.appendChild(paragrafoID);
        li.appendChild(paragrafoDescricao);
        li.appendChild(botaoEditar);
        li.appendChild(botaoDeletar);
        li.appendChild(paragrafoCodigo);
        li.appendChild(paragrafoUnidade);
        li.appendChild(paragrafoPreco);
        li.appendChild(paragrafoEstoque);
        li.appendChild(paragrafoEstoqueMin);
        li.appendChild(sinalArmazenamento);



        // Adiciona a li à lista de produtos
        localCarregamento.appendChild(li);
    });
}

// Função para criar um botão com imagem e evento
function criarBotao(imagemSrc, altText, onClickHandler) {
    const botao = document.createElement('button');
    const imagem = document.createElement('img');
    imagem.src = imagemSrc;
    imagem.alt = altText;
    imagem.classList.add("botao-deletarEditar-imagem")
    botao.appendChild(imagem);
    botao.classList.add('botao-deletarEditar');
    botao.addEventListener('click', onClickHandler);
    return botao;
}

// Função para editar o produto
function editarProduto(id) {
    console.log("Editar produto com ID:", id);
    // Lógica de edição aqui
}

// Função para deletar o produto
function deletarProduto(idBotao) {
    const indice = produto.findIndex(item => item.id === idBotao);
    produto.splice(indice, 1);

    console.log(indice);
    
    carregarItens();
}

carregarItens();
