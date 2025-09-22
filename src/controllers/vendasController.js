import dados from "../models/dados.js";
const { dadosVendas } = dados;

//GetAll
const getAllVendas = (req, res) => {
      const { produto, valorTotal, dataVenda, vendedor  } = req.query;
  let resultado = dadosVendas;
  console.log(resultado);

  // Filtro por produto (busca parcial)
  if (produto) {
    resultado = resultado.filter((dadoVenda) =>
      dadoVenda.produto.toLowerCase().includes(produto.toLowerCase())
    );
  }

  // Filtro por vendedor
  if (vendedor) {
    resultado = resultado.filter(
      (dadosVenda) => dadosVenda.vendedor.toLowerCase() === vendedor.toLowerCase()
    );
  }

  const hoje = new Date(); 
  const dataSeteDiasAtras = new Date();
  dataSeteDiasAtras.setDate(hoje.getDate() - 7);
  
  const dataMes = new Date();
  dataMes.setDate(hoje.getDate() -30)

  const dataSemestre = new Date();
  dataSemestre.setDate(hoje.getDate() -90)
  

  // Filtro por data de venda
  if (dataVenda) {
    //filtro nos ultimos 7 dias
    if (dataVenda <= hoje && dataVenda > dataSeteDiasAtras) {
        resultado = resultado.find(
            (dadosVenda) => dadosVenda.dataVenda === dataVenda
          );
    };

    //filtro nos ultimos 30 dias
    if (dataVenda < hoje && dataVenda < dataMes) {
        resultado = resultado.find(
            (dadosVenda) => dadosVenda.dataVenda === dataVenda
          );
    };

    //filtro nos ultimos 90 dias
    if (dataVenda < hoje && dataVenda < dataSemestre) {
        resultado = resultado.find(
            (dadosVenda) => dadosVenda.dataVenda === dataVenda
          );
    };
  };

  if (valorTotal) {
    //se o valor total for menor ou igual a 100
    if (valorTotal <= 100) {
        resultado = resultado.find(
        (dadosVenda) => dadosVenda.valorTotal === valorTotal);
    };
    //se o valor total for entre 100 e 500
    if (valorTotal => 100 && valorTotal <= 500) {
        resultado = resultado.find(
        (dadosVenda) => dadosVenda.valorTotal === valorTotal);
    };
    //se o valor for maor que 500
    if (valorTotal > 500) {
        resultado = resultado.find(
        (dadosVenda) => dadosVenda.valorTotal === valorTotal);
    }
  }

  res.status(200).json({
    total: resultado.length,
    dadosDeVendas: resultado,
  });
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
    
    if (quantidade <= 0) {
        return res.status(400).json({
            success: false,
            message: "O campo 'quantidade' tem que ser maior que 0!"
        });
    };

    if (desconto => valorTotal) {
        return res.status(400).json({
            success: false,
            message: "O campo 'desconto' tem que ser menor que o valor da venda!"
        });
    };

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

const deleteDadosVendas = (req, res) => {
    let id = parseInt(req.params.id);
    const dadosVendasRemover = dadosVendas.find(v => v.id === id);

    if (!dadosVendasRemover) {
        return res.status(404).json({
            success: false,
            message: 'Este dado de venda não existe'
        });
    };
    const dadosVendasFiltrados = dadosVendas.filter(dadosVenda => dadosVenda.id !== id);
    dadosVendas.splice(0, dadosVendas.length, ...dadosVendasFiltrados);
    res.status(200).json({
        success: true,
        message: 'Dados de venda deletado com sucesso',
        VendaRemovida: dadosVendasRemover
    });
  };

const updateDadosVendas = (req, res) => {
    const id = parseInt(req.params.id);

    const { produto, cliente, quantidade, valorTotal, dataVenda, desconto, vendedor } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id de venda deve ser um número válido"
        })
    }

    if (quantidade <= 0) {
        return res.status(400).json({
            success: false,
            message: "O campo 'quantidade' tem que ser maior que 0!"
        });
    };

    if (valorTotal <= desconto) {
        return res.status(400).json({
            success: false,
            message: "O campo 'desconto' tem que ser menor que o valor da venda!"
        });
    };

    const dadosVendasExiste = dadosVendas.find(dadoVenda => dadoVenda.id === id);

    if (!dadosVendasExiste) {
        return res.status(400).json({
            success: false,
            message: "Dados de venda não existe."
        })
    }
   

    const dadosVendasAtualizados = dadosVendas.map(dadoVenda => {
        return dadoVenda.id === id
            ? {
                ...dadoVenda,
                ...(produto      && { produto }),
                ...(cliente    && { cliente }),
                ...(quantidade  && { quantidade }),
                ...(valorTotal      && { valorTotal }),
                ...(vendedor      && { vendedor }),
                ...(desconto  && { desconto }),
                ...(dataVenda && new Date(dataVenda) >= new Date() && { dataVenda })
            }
            : dadoVenda;
    });
    
    dadosVendas.splice(0, dadosVendas.length, ...dadosVendasAtualizados);

    const dadosVendaNovo = dadosVendas.find(dadoVenda => dadoVenda.id === id);

    res.status(200).json({
        success: true,
        message: "Dados de vendas atualizados com sucesso",
        DadosVendaAtualizado: dadosVendaNovo
    });
};

export { getAllVendas, getById, createDadosVendas, deleteDadosVendas, updateDadosVendas };


