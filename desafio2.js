var CalculadoraDePontuacao = (function() {
    function CalcularNivel(vitorias) {
        if (vitorias < 10) {
            return "ferro"
        } else if (vitorias >= 10 && vitorias <= 20) {
            return "Bronze"
        } else if (vitorias >= 21 && vitorias <= 50) {
            return "prata"
        } else if (vitorias >= 51 && vitorias <= 80) {
            return "ouro"
        } else if (vitorias >= 81 && vitorias <= 90) {
            return "diamante"
        } else if (vitorias >= 91 && vitorias <= 100) {
            return "Lendário"
        } else if (vitorias === 101) {
            return "Imortal"
        } else {
            return "Nivel indefinido"
        }
    } 

    return {
        CalcularNivel: CalcularNivel
    }
})()

var heroi = "lucas"
var saldoVitorias = 10;

var nivel = CalculadoraDePontuacao.CalcularNivel(saldoVitorias)
console.log("O herói " + heroi + " tem de saldo " + saldoVitorias + " vitórias e está no nível: " + nivel + ".")
