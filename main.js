const catalogo = [
    {
        id: 1,
        nome: 'Hamburguer Clássico',
        preco: 25.00,
        nomeArquivoImagem: "burger-1.jpg",
    }, 
    {
        id: 2,
        nome: 'Hamburguer Mexicano',
        preco: 27.00,
        nomeArquivoImagem: "burger-2.jpg",
    },
];

for (const produtoCatalogo of catalogo) {
    
    const cartaoProduto = `<div class="border-solid border-2 border-sky-500 w-48 m-2" id="card-produto-${produtoCatalogo.id}">
    <img 
        src="./assets/images/${produtoCatalogo.nomeArquivoImagem}" 
        alt="Classic Burger" 
        style="height: 250px;">
    <p>${produtoCatalogo.nome}</p>
    <p>R$ ${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`;
    
    document.getElementById('container-produto').innerHTML += cartaoProduto;

}