import { lerLocalStorage, desenharProdutoCarrinhoSimples } from "./src/utilidades";

function criarPedidoHistorico(pedidoData) {
    const elementoPedido = `<p class="text-xl text-bold my-4">${new Date(pedidoData.dataPedido).toLocaleDateString('pt-BR', {hour: '2-digit', minute: '2-digit'})}</p>
    <section id='container-pedidos-${pedidoData.dataPedido}' class="bg-slate-300 p-3 rounded-md "></section>
    `
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += elementoPedido;

    for(const idProduto in pedidoData.pedido) {
        desenharProdutoCarrinhoSimples(idProduto, `container-pedidos-${pedidoData.dataPedido}`, pedidoData.pedido[idProduto]);
    }
}

function renderizarHistoricoPedidos() {
    const historico = lerLocalStorage('historico');
    for(const pedidoData of historico) {
        criarPedidoHistorico(pedidoData);
    }
}

renderizarHistoricoPedidos();   