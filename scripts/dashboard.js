// ------------------- MENU SIDEBAR ------------------- //

// Mostrar tela
function mostrarTela(telaId) {
  document.querySelectorAll(".tela").forEach((t) => t.classList.add("d-none"));
  document.getElementById(telaId).classList.remove("d-none");
}

// ------------------- EVENTOS ------------------- //

let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

const form = document.getElementById("formEvento");
const tabelaBody = document.querySelector("#tabelaEventos tbody");

// Criar novo evento
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

// Atualizar tabela de eventos
function atualizarTabela() {
  tabelaBody.innerHTML = "";
  eventos.forEach((evento) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${evento.nome}</td>
      <td>${evento.organizador}</td>
      <td>${evento.email}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="gerenciarEvento(${evento.id})">Gerenciar</button>
        <button class="btn btn-sm btn-danger" onclick="excluirEvento(${evento.id})">Excluir</button>
      </td>
    `;

    tabelaBody.appendChild(row);
  });
}

// Excluir evento
function excluirEvento(id) {
  if (confirm("Tem certeza que deseja excluir este evento?")) {
    eventos = eventos.filter((evento) => evento.id !== id);
    localStorage.setItem("eventos", JSON.stringify(eventos));
    atualizarTabela();
  }
}

// Gerenciar evento
function gerenciarEvento(id) {
  const eventoSelecionado = eventos.find((evento) => evento.id === id);

  if (!eventoSelecionado) {
    alert("Evento não encontrado!");
    return;
  }

  document.getElementById("nomeEventoGerenciar").textContent =
    eventoSelecionado.nome;
  const modal = new bootstrap.Modal(
    document.getElementById("modalGerenciarEvento")
  );
  modal.show();

  carregarJuradosParaGerenciamento();
}

// Interfaces de julgamento
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

  console.log("Interfaces atribuídas ao evento:", selecionadas);
  alert("Interface(s) atribuída(s) ao evento com sucesso!");
}

atualizarTabela();

// ------------------- JURADOS ------------------- //

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

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("modalCadastrarJurado")
  );
  modal.hide();
  formJurado.reset();
});

// Atualizar tabela de jurados
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

atualizarTabelaJurados();

// Carregar jurados no gerenciamento do evento
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

// Permissão de acesso do jurado
function definirPermissaoAcessoJurado() {
  const switchAcesso = document.getElementById("acessoJuradoSwitch");
  const linkDiv = document.getElementById("linkAcessoJurado");

  if (switchAcesso.checked) {
    linkDiv.classList.remove("d-none");
  } else {
    linkDiv.classList.add("d-none");
  }
}

// Copiar link de acesso
function copiarLinkAcesso() {
  const input = document.querySelector("#linkAcessoJurado input");
  input.select();
  document.execCommand("copy");
  alert("Link copiado para a área de transferência!");
}

// ------------------- COMPETIDORES ------------------- //

let competidores = JSON.parse(localStorage.getItem("competidores")) || [];
const formCompetidor = document.getElementById("formCompetidor");
const tabelaCompetidores = document.getElementById("tabelaCompetidores");

// Atualizar tabela de competidores
function atualizarTabelaCompetidores() {
  tabelaCompetidores.innerHTML = "";
  competidores.forEach((c) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${c.nome}</td>
      <td>${c.apelido}</td>
      <td>${c.modalidade}</td>
      <td>
        <button class="btn btn-sm btn-primary" onclick="editarCompetidor(${c.id})">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="excluirCompetidor(${c.id})">Excluir</button>
        <button class="btn btn-sm btn-info" onclick="visualizarCompetidor(${c.id})">Visualizar</button>
      </td>
    `;
    tabelaCompetidores.appendChild(row);
  });
}

// Cadastrar/editar competidor
formCompetidor.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("idCompetidor").value;
  const nome = document.getElementById("nomeCompetidor").value;
  const apelido = document.getElementById("apelidoCompetidor").value;
  const modalidade = document.getElementById("modalidadeCompetidor").value;

  if (id) {
    const index = competidores.findIndex((c) => c.id == id);
    competidores[index] = { id: Number(id), nome, apelido, modalidade };
  } else {
    competidores.push({
      id: Date.now(),
      nome,
      apelido,
      modalidade,
    });
  }

  localStorage.setItem("competidores", JSON.stringify(competidores));
  atualizarTabelaCompetidores();
  bootstrap.Modal.getInstance(
    document.getElementById("modalCompetidor")
  ).hide();
  formCompetidor.reset();
});

// Editar competidor
function editarCompetidor(id) {
  const c = competidores.find((c) => c.id === id);
  document.getElementById("idCompetidor").value = c.id;
  document.getElementById("nomeCompetidor").value = c.nome;
  document.getElementById("apelidoCompetidor").value = c.apelido;
  document.getElementById("modalidadeCompetidor").value = c.modalidade;
  new bootstrap.Modal(document.getElementById("modalCompetidor")).show();
}

// Excluir competidor
function excluirCompetidor(id) {
  if (confirm("Deseja excluir este competidor?")) {
    competidores = competidores.filter((c) => c.id !== id);
    localStorage.setItem("competidores", JSON.stringify(competidores));
    atualizarTabelaCompetidores();
  }
}

// Visualizar dados do competidor
function visualizarCompetidor(id) {
  const c = competidores.find((c) => c.id === id);
  alert(`Nome: ${c.nome}\nApelido: ${c.apelido}\nModalidade: ${c.modalidade}`);
}

// Atualizar ao carregar
atualizarTabelaCompetidores();

// ------------------- RELATÓRIOS ------------------- //

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
