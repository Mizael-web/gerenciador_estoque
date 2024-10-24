const { estoque } = require ( "./estoque")

function listarEstoque(){
    try {
        estoque.forEach((estoque) => {
            console.table (estoque)
        })
    } catch (error){
           console.error("erro ao listar Estoque", error.message);          
    }
}        
       
module.exports = {listarEstoque };

 