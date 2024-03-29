import { adicionarCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
    
        const cartaoProduto = `<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group" id="card-produto-${produtoCatalogo.id}">
        <img 
            src="./assets/images/${produtoCatalogo.nomeArquivoImagem}" 
            alt="Classic Burger"
            class="group-hover:scale-105 duration-300 my-3 rounded-lg">
        <p class="text-sm">${produtoCatalogo.nome}</p>
        <p class="text-sm">R$ ${produtoCatalogo.preco}</p>
        <button id="adicionar-${produtoCatalogo.id}" class="bg-[#120201] hover:bg-[#FFA07A] text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
    
        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarCarrinho(produtoCatalogo.id));
    }
}