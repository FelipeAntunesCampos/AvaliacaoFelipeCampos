import dados from "../models/dados.js";
const { dadosVendas } = dados;

//GetAll
const getAllVendas = (req, res) => {
    res.status(200).json({
        total: dadosVendas.length,
        vendas: dadosVendas
    })
}



export { getAllVendas };


