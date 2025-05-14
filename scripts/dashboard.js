// Arquivo com funções e lógicas do painel admin //

// Mostrar tela//
function mostrarTela(telaId) {
  document.querySelectorAll(".tela").forEach((t) => t.classList.add("d-none"));
  document.getElementById(telaId).classList.remove("d-none");
}

// Funçao da tela de exportar relatório
function exportarRelatorio() {
  const tipo = document.getElementById("tipoRelatorio").value;
  const preview = document.getElementById("previewRelatorio");

  if (tipo === "ranking") {
    preview.innerHTML =
      "<strong>Ranking Geral</strong><br>Competidor A - 90pts<br>Competidor B - 85pts";
  } else if (tipo === "batalhas") {
    preview.innerHTML =
      "<strong>Resultados das Batalhas</strong><br>Batalha 1: A vs B - Vencedor: A<br>Batalha 2: C vs D - Vencedor: C";
  }

  alert("Relatório exportado com sucesso! (simulação)");
}

// Função do modal de 'criar evento'
let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

const form = document.getElementById("formEvento");
const tabelaBody = document.querySelector("#tabelaEventos tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const evento = {
    id: Date.now(),
    nome: document.getElementById("nomeEvento").value,
    organizador: document.getElementById("organizador").value,
    telefone: document.getElementById("telefone").value,
    email: document.getElementById("email").value,
    data: document.getElementById("dataEvento").value,
    local: document.getElementById("localEvento").value,
    modalidade: document.getElementById("modalidades").value,
    jurados: document.getElementById("qtdJurados").value,
    observacoes: document.getElementById("observacoes").value,
  };

  eventos.push(evento);
  localStorage.setItem("eventos", JSON.stringify(eventos));
  atualizarTabela();

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("modalCriarEvento")
  );
  modal.hide();

  const msg = document.getElementById("mensagemEvento");
  msg.classList.remove("d-none");
  form.reset();

  setTimeout(() => msg.classList.add("d-none"), 3000);
});

function atualizarTabela() {
  tabelaBody.innerHTML = "";
  eventos.forEach((evento) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${evento.nome}</td>
        <td>${evento.organizador}</td>
        <td>${evento.email}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="gerenciarEvento(${evento.id})">
            Gerenciar
          </button>
          <button class="btn btn-sm btn-danger" onclick="excluirEvento(${evento.id})">
            Excluir
          </button>
        </td>
      `;

    tabelaBody.appendChild(row);
  });
}

function excluirEvento(id) {
  if (confirm("Tem certeza que deseja excluir este evento?")) {
    eventos = eventos.filter((evento) => evento.id !== id);
    localStorage.setItem("eventos", JSON.stringify(eventos));
    atualizarTabela();
  }
}

function gerenciarEvento(id) {
  const eventoSelecionado = eventos.find((evento) => evento.id === id);

  if (!eventoSelecionado) {
    alert("Evento não encontrado!");
    return;
  }

  // Atualiza o título do modal com o nome do evento
  document.getElementById("nomeEventoGerenciar").textContent =
    eventoSelecionado.nome;

  // Abre o modal
  const modal = new bootstrap.Modal(
    document.getElementById("modalGerenciarEvento")
  );
  modal.show();

  // Aqui você pode carregar os jurados e configurações específicas no futuro
}

// Carrega tabela ao abrir a tela
atualizarTabela();
