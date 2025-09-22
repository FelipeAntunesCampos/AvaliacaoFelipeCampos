import dados from "../models/dados.js";
const { dadosVendas } = dados;

//GetAll
const getAllVendas = (req, res) => {
    res.status(200).json({
        total: dadosVendas.length,
        vendas: dadosVendas
    })
};

//GetById
const getById = (req, res) => {
    let id = parseInt(req.params.id);

    const dadoVenda = dadosVendas.find(v => v.id === id);

    if (dadoVenda) {
        res.status(200).json({
            success: true,
            dadoVenda: dadoVenda
        })
    }

    res.status(400).json({
        success: false,
        message: "Dados de vendas nao encontrados"
    })
};


export { getAllVendas, getById };


