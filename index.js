let xpDoJogador = 2005
let ferro = 1000
let xpMinimoParaBronze = 2001
let xpMaximoParaBronze = 5000
let xpMinimoParaOuro = 6001
let xpMaximoParaOuro = 7000
let xpMinimoParaAscendente = 8001
let xpMaximoParaAscendente = 9000
let xpParaRadiante = 10001;
let nome = "Guardião do Fogo"
let nivel

if (xpDoJogador >= ferro && xpDoJogador <= xpMinimoParaBronze) {
    nivel = "Ferro"
} else if (xpDoJogador >= xpMinimoParaBronze && xpDoJogador <= xpMaximoParaBronze) {
    nivel = "Bronze"
} else if (xpDoJogador >= xpMinimoParaOuro && xpDoJogador <= xpMaximoParaOuro) {
    nivel = "Ouro"
} else if (xpDoJogador >= xpMinimoParaAscendente && xpDoJogador <= xpMaximoParaAscendente) {
    nivel = "Ascendente"
} else if (xpDoJogador >= xpParaRadiante) {
    nivel = "Radiante"
}

console.log("O herói " + nome + " está no nível de " + nivel)
