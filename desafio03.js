import fs from "fs";

function calcularFaturamento() {
  fs.readFile("dados/dados.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo:", err);
      return;
    }

    const faturamentoDiario = JSON.parse(data);

    let menorFaturamento = null;
    let maiorFaturamento = null;
    let totalFaturamento = 0;
    let diasContabilizados = 0;
    let diasAcimaDaMedia = 0;

    faturamentoDiario.forEach((item) => {
      if (item.valor !== 0.0) {
        totalFaturamento += item.valor;
        diasContabilizados++;

        if (menorFaturamento === null || item.valor < menorFaturamento) {
          menorFaturamento = item.valor;
        }
        if (item.valor > maiorFaturamento) {
          maiorFaturamento = item.valor;
        }
      }
    });

    if (diasContabilizados > 0) {
      const mediaMensal = totalFaturamento / diasContabilizados;

      faturamentoDiario.forEach((item) => {
        if (item.valor > mediaMensal) {
          diasAcimaDaMedia++;
        }
      });

      console.log(`Menor faturamento: R$${menorFaturamento.toFixed(2)}`);
      console.log(`Maior faturamento: R$${maiorFaturamento.toFixed(2)}`);
      console.log(`Número de dias acima da média mensal: ${diasAcimaDaMedia}`);
    } else {
      console.log("Não há dados de faturamento válidos para o cálculo.");
    }
  });
}

calcularFaturamento();
