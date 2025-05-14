// Exemplo básico de estrutura de dados para o torneio
const data = {
  teams: [
    ["Competidor 1", "Competidor 2"],
    ["Competidor 3", "Competidor 4"],
    ["Competidor 5", "Competidor 6"],
    ["Competidor 7", "Competidor 8"],
  ],
  results: [
    [
      [1, 2],
      [2, 1],
      [1, 2],
      [1, 2],
    ], // Resultados fictícios (opcional)
  ],
};

// Inicializa o bracket
$(function () {
  $("#bracket").bracket({
    init: data,
  });
});

// scripts/brackets.js
console.log("Gerenciamento de brackets carregado");
