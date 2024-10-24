const { estoque } = require ("./estoque");

function criarEstoque ( id, nome, modelo, numeroSerie, dataCompra, vencimentoGarantia, localizacao, status, alocadoPara) {
    const novoEstoque = {
      id,
      nome,
      modelo,
      numeroSerie,
      dataCompra,
      vencimentoGarantia,
      localizacao,
      status, 
      alocadoPara
    }
   try {
      estoque.push (novoEstoque);      
   }
    catch(error) {
      ("error ao cadastrar dados", error.mensage);
   }            
}
    module.exports = {criarEstoque };

