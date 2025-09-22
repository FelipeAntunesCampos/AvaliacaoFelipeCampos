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

//Create
const createDadosVendas = (req, res) => {
    const { produto, cliente, quantidade, valorTotal, dataVenda, vendedor, desconto } = req.body;
    console.log("Dados recebidos:", req.body);
  
    // Validação básica
    if (!produto || !cliente || !valorTotal || !vendedor || !desconto) {
      return res.status(400).json({
        success: false,
        message: "Produto, Cliente, ValorTotal, Vendedor, Desconto são obrigatorios para uma venda!",
      });
    }
  
    // Criar nova venda
    const novoDadosVenda = {
      id: dadosVendas.length + 1,
      produto,
      cliente,
      quantidade, 
      valorTotal, 
      dataVenda,
      vendedor,
      desconto
    };
  
    // Adicionar à lista de vendas
    dadosVendas.push(novoDadosVenda);
  
    res.status(201).json({
      success: true,
      message: "Novo Dado de venda adicionado com sucesso!",
      data: novoDadosVenda,
    });
  };


export { getAllVendas, getById, createDadosVendas };


