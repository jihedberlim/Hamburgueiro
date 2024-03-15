import { renderizarCatalogo } from "./src/cartaoProduto";
import { 
    inicializarCarrinho,
    renderizarProtudosCarrinho,
    atualizarPrecoCarrinho, 
} from "./src/menuCarrinho";

inicializarCarrinho();
renderizarCatalogo();
renderizarProtudosCarrinho();
atualizarPrecoCarrinho();