# 🕺 Breaking Judgment System

Sistema web para gerenciamento e julgamento de batalhas de **Breaking**, com foco em fluidez,
tempo real e modularidade. Este projeto é um MVP funcional, responsivo e leve, feito com tecnologias web básicas.

---

## 📦 Estrutura do Projeto:

📁**TRIADSJ**
├── index.html # Tela de login
├── 📁 pages/
│ ├── pre-selecao.html # Interface de julgamento (pré-seleção)
│ ├── triplice.html # Interface Tríplice
│ ├── painel.html # Painel de resultado em tempo real
│ └── brackets.html # Novo: Gerenciamento de brackets
├── 📁 styles/
│ ├── base.css # Reset e estilo base
│ ├── layout.css # Grid e containers
│ ├── components.css # Estilização de componentes reutilizáveis
│ └── theme.css # Cores e variáveis
├── 📁 scripts/
│ ├── auth.js # Login e controle de acesso por função
│ ├── preSelecao.js # Lógica da pré-seleção
│ ├── triplice.js # Lógica da avaliação tríplice
│ ├── painel.js # Atualização do painel em tempo real
│ └── brackets.js # Novo: Lógica de chaveamento interativo
├── 📁 utils/
│ ├── api.js # Comunicação simulada com backend (fetch)
│ └── socket.js # Conexão em tempo real (Socket.IO ou WebSocket)
├── 📁 components/
│ ├── slider.js # Componente de slider reutilizável
│ ├── scoreBox.js # Caixa de pontuação
│ ├── modal.js # Modais reutilizáveis
│ └── bracketNode.js # Novo: Nó visual para brackets
└── 📁 assets/
├── icons/ # Ícones SVG ou PNG
└── fonts/ # Tipografias personalizadas


---

## ✅ Funcionalidades do MVP

- 🔐 **Login com controle de função** (jurado, público, admin)
- 📝 **Julgamento por Pré-Seleção** (sim/não)
- 🎛️ **Julgamento Tríplice** (técnica, criatividade, performance)
- 📊 **Painel ao vivo** (atualização em tempo real)
- 🧩 **Chaveamento de Brackets** (arrastar e soltar, eliminatórias)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** + **CSS3 (modularizado)**
- **JavaScript (Vanilla)** estruturado em módulos
- **Socket.IO ou WebSocket** (para tempo real)
- **Fetch API** (para simulação de backend)

> Este projeto é 100% frontend, mas pode ser facilmente integrado com um backend em FastAPI, Express ou Firebase.

---

## 🚀 Como Executar Localmente

1. Clone este repositório:

```bash
git clone https://github.com/seuusuario/breaking-judgment-system.git
cd breaking-judgment-system



