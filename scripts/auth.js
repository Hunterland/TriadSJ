// Arquivo com a lógica de autenticação //

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulação simples de login //
  if (username === "admin" && password === "1234") {
    // aqui será uma pagina que vai ser redirecionada após o login
    window.location.href = "../pages/admin/dashboard.html";
  } else {
    document.getElementById("errorMsg").textContent =
      "Usuário ou senha inválidos";
  }
});
