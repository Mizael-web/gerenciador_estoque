const { estoque } = require("./estoque");

function editarEstoque(id, novoNome, novoModelo, novoNumeroSerie, novaDataCompra, novoVencimentoGarantia, novaLocalizacao, novoStatus, novoAlocadoPara) {
    try {
        const itemEstoque = estoque.find(elementoDoArray => elementoDoArray.id === id);

        if (itemEstoque) {
            itemEstoque.nome = novoNome;
            itemEstoque.modelo = novoModelo;
            itemEstoque.numeroSerie = novoNumeroSerie;
            itemEstoque.dataCompra = novaDataCompra;
            itemEstoque.vencimentoGarantia = novoVencimentoGarantia;
            itemEstoque.localizacao = novaLocalizacao;
            itemEstoque.status = novoStatus;
            itemEstoque.alocadoPara = novoAlocadoPara;

            console.log("Estoque editado com sucesso!");
        } else {
            console.log("Estoque não encontrado");
        }
    } catch (error) {
        console.error("Erro ao editar estoque", error.message);
    }
}

module.exports = { editarEstoque };