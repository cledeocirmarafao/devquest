const {calcularPedidos} = require("./index");

it("não deve calcular entrega para pedidos acima de 500", () => {
  const meusPedidos = {
    itens: [
      { nome: "camisa manga longa", valor: 3500 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
  };

  const resultado = calcularPedidos(meusPedidos);

  expect(resultado).toBe(3500);
});

it("deve calcular entrega para pedidos abaixo de 500", () => {
  const meusPedidos = {
    itens: [
      { nome: "camisa manga longa", valor: 350 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
  };

  const resultado = calcularPedidos(meusPedidos);

  expect(resultado).toBe(450);
});

it("deve calcular entrega para pedidos de exatamente 500", () => {
  const meusPedidos = {
    itens: [
      { nome: "camisa manga longa", valor: 400 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
  };

  const resultado = calcularPedidos(meusPedidos);

  expect(resultado).toBe(500);
});

it("deve acrescentar 20% no valor da entrega para pedidos caso o estado seja RS", () => {
  const pedidosComEstadoRS = {
    itens: [
      { nome: "camisa manga longa", valor: 400 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
    estado: "RS",
  };

  const resultado = calcularPedidos(pedidosComEstadoRS);

  expect(resultado).toBe(520);
});

it("deve acrescentar 20% no valor da entrega para pedidos caso o estado seja SC", () => {
  const pedidosComEstadoSC = {
    itens: [
      { nome: "camisa manga longa", valor: 400 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
    estado: "SC",
  };

  const resultado = calcularPedidos(pedidosComEstadoSC);

  expect(resultado).toBe(520);
});

it("não deve acrescentar 20% no valor da entrega para pedidos caso o estado seja SP", () => {
  const pedidosComEstadoSP = {
    itens: [
      { nome: "camisa manga longa", valor: 400 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
    estado: "SP",
  };

  const resultado = calcularPedidos(pedidosComEstadoSP);

  expect(resultado).toBe(500);
});