const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentuais(faturamentoPorEstado) {
  const totalFaturamento = Object.values(faturamentoPorEstado).reduce(
    (total, valor) => total + valor,
    0
  );

  const estados = Object.entries(faturamentoPorEstado);

  for (const [estado, valor] of estados) {
    const percentual = (valor / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
}

calcularPercentuais(faturamentoPorEstado);
