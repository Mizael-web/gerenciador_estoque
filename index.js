const prompt = require ("prompt-sync")();

    const { criarEstoque} = require ( "./estoquepecaveiculo/criarEstoque")
    const { editarEstoque } = require ( "./estoquepecaveiculo/editarEstoque")
    const { excluirEstoque} = require ("./estoquepecaveiculo/excluirEstoque")
    const { listarEstoque} = require ("./estoquepecaveiculo/listarEstoque")


    criarEstoque (" a9510", "paralama", " volwsvagem", "105304102", "08/02/2005"," 08/02/2010", "Estante102", "nova", "reposição" );
    criarEstoque (" c90510", "farol", " chevrolet", "101504102", "02/05/2015"," 01/05-2020", "Estante205", "nova", "reposição" );
    listarEstoque (); 
    editarEstoque ("e4051", "capu", "ford","101035401", " 10/05/2010", "09/05/2015"," Estante202", " usada ", " troca" );
    excluirEstoque (" c90510", "farol", " chevrolet", "101504102", "02/05/2015"," 01/05-2020", "Estante205", "nova", "reposição" );
    listarEstoque (); 