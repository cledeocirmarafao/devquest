const acrescimoDeEntrega = 0.2

const calcularPedidos = (pedidos) => {
  const valorDosProdutos = pedidos.itens
    .filter((item) => !item.entrega)
    .reduce(
      (totalDosPedidos, pedidoAtual) => totalDosPedidos + pedidoAtual.valor,
      0
    );

  const entrega = pedidos.itens.filter((item) => item.entrega);

  if (pedidos.estado === 'RS' || pedidos.estado === 'SC') {
    const valorComAcrescimo = entrega[0].valor * acrescimoDeEntrega;
    entrega[0].valor += valorComAcrescimo;
  }

  if (valorDosProdutos > 500) {
    return valorDosProdutos;
  } else {
    return valorDosProdutos + entrega[0].valor;
  }
};

module.exports = { calcularPedidos };