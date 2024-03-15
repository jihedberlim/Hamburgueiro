export const catalogo = [
    {
        id: "1",
        nome: 'Hamburguer Clássico',
        preco: 25.00,
        nomeArquivoImagem: "burger-1.jpg",
    }, 
    {
        id: "2",
        nome: 'Hamburguer Mexicano',
        preco: 27.00,
        nomeArquivoImagem: "burger-2.jpg",
    },
    {
        id: "3",
        nome: 'Hamburguer Mexicano',
        preco: 30.00,
        nomeArquivoImagem: "burger-3.jpg",
    },
    {
        id: "4",
        nome: 'Hamburguer Mexicano',
        preco: 32.50,
        nomeArquivoImagem: "burger-4.jpg",
    },
    {
        id: "5",
        nome: 'Hamburguer Mexicano',
        preco: 35.00,
        nomeArquivoImagem: "burger-5.jpg",
    },
    {
        id: "6",
        nome: 'Hamburguer Mexicano',
        preco: 35.50,
        nomeArquivoImagem: "burger-6.jpg",
    },
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find(p => p.id === idProduto);

    const containerProdutosCarrinho = document.getElementById(idContainerHtml);

    const elementoArticle = document.createElement('article');
    const articleClasses = ['flex', 'bg-slate-200', 'rounded-lg', 'p-1', 'relative', 'mb-2', 'w-96'];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }

    const cartaoProdutoCarrinho = `<img src="./assets/images/${produto.nomeArquivoImagem}" alt="Carrinho: ${produto.nome}"class="h-24 rounded-lg">
    <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-green-500 text-lg">R$${produto.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>
    </div>`;

    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);

}