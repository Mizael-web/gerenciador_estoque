const { estoque } = require ("./estoque");



function excluirEstoque(id) {
    try {
        const indice = estoque.findIndex (elementodoarray =>
         elementodoarray.id === id
    )
        if (indice === -1){
           
            console.log (" Estoque não encontrado" )
        }else {
            estoque.splice (indice, 1)
            console.log ( "Estoque deletado com sucesso!")
        }


    } catch (error) {
        console.error ("Erro ao excluir Estoque", error.message)          
 }  
           
}


     module.exports = {excluirEstoque};


