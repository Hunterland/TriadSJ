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

// Função para atualizar tabela //
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

// Função para Excluir um evento da tabela //
function excluirEvento(id) {
  if (confirm("Tem certeza que deseja excluir este evento?")) {
    eventos = eventos.filter((evento) => evento.id !== id);
    localStorage.setItem("eventos", JSON.stringify(eventos));
    atualizarTabela();
  }
}

// Função para gerenciar evento //
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

// Salvar interfaces de julgamento em um evento //
function salvarInterfaceJulgamento() {
  const selecionadas = [];

  if (document.getElementById("interfaceTriplice").checked) {
    selecionadas.push("triplice.html");
  }
  if (document.getElementById("interfacePreSelecao").checked) {
    selecionadas.push("pre-selecao.html");
  }

  if (selecionadas.length === 0) {
    alert("Selecione uma interface de julgamento.");
    return;
  }

  // Aqui você pode salvar no localStorage ou backend vinculado ao evento atual
  console.log("Interfaces atribuídas ao evento:", selecionadas);

  alert("Interface(s) atribuída(s) ao evento com sucesso!");
}

// Carrega tabela ao abrir a tela
atualizarTabela();

// ------------------- JURADOS -------------------

let jurados = JSON.parse(localStorage.getItem("jurados")) || [];

const formJurado = document.getElementById("formJurado");
const tabelaJurados = document.querySelector("#tabelaJurados tbody");

// Cadastrar novo jurado
formJurado.addEventListener("submit", function (e) {
  e.preventDefault();

  const novoJurado = {
    id: Date.now(),
    nome: document.getElementById("nomeJurado").value,
    email: document.getElementById("emailJurado").value,
    especialidade: document.getElementById("especialidadeJurado").value,
  };

  jurados.push(novoJurado);
  localStorage.setItem("jurados", JSON.stringify(jurados));
  atualizarTabelaJurados();

  // Fechar modal
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("modalCadastrarJurado")
  );
  modal.hide();
  formJurado.reset();
});

// Atualizar tabela
function atualizarTabelaJurados() {
  tabelaJurados.innerHTML = "";
  jurados.forEach((j) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${j.nome}</td>
      <td>${j.email}</td>
      <td>${j.especialidade || "-"}</td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="excluirJurado(${j.id})">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    `;
    tabelaJurados.appendChild(row);
  });
}

// Excluir jurado
function excluirJurado(id) {
  if (confirm("Tem certeza que deseja excluir este jurado?")) {
    jurados = jurados.filter((j) => j.id !== id);
    localStorage.setItem("jurados", JSON.stringify(jurados));
    atualizarTabelaJurados();
  }
}

// Atualizar ao carregar página
atualizarTabelaJurados();

// Carregar lista de jurados na aba 'Jurados' no modal de gerenciamento de eventos //
function carregarJuradosParaGerenciamento() {
  const listaJurados = JSON.parse(localStorage.getItem("jurados")) || [];
  const container = document.getElementById("listaJuradosGerenciar");

  if (!container) return;

  container.innerHTML = "";

  if (listaJurados.length === 0) {
    container.innerHTML =
      "<p class='text-muted'>Nenhum jurado cadastrado ainda.</p>";
    return;
  }

  listaJurados.forEach((jurado) => {
    const col = document.createElement("div");
    col.className = "col-md-6";

    col.innerHTML = `
      <div class="form-check shadow-sm p-3 rounded bg-light">
        <input class="form-check-input" type="checkbox" value="${jurado.id}" id="jurado-${jurado.id}">
        <label class="form-check-label" for="jurado-${jurado.id}">
          <strong>${jurado.nome}</strong><br>
          <small class="text-muted">${jurado.email}</small>
        </label>
      </div>
    `;

    container.appendChild(col);
  });
}

carregarJuradosParaGerenciamento();
