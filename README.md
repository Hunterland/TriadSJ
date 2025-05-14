# 🕺 SISTEMA TRIAD: Sistema para gerenciar eventos de breaking locais - MVP

Este projeto é um **MVP (Produto Mínimo Viável)** de um sistema completo de gerenciamento de eventos de Breaking. Ele foi pensado para atender às demandas básicas de julgamento, organização de brackets e exibição de resultados em tempo real.

---

## 📌 Funcionalidades Principais

- ✅ **Acesso e Gerenciamento de Jurados**
- ✅ **Interface de Pré-seleção com sliders de avaliação**
- ✅ **Interface Tríplice com julgamento comparativo entre dois dançarinos**
- ✅ **Painel de Resultados em Tempo Real**
- ✅ **Gerenciamento de Brackets (Chaveamento Dinâmico)**
- ✅ **Configurações gerais**
- ✅ **Relatórios (para exportar arquivos de resultados de batalhas)**


---

## 📦 Estrutura do Projeto

# frontend

```
📁 /TRIADSJ
├── index.html                  # Tela de login
├── 📁 pages/
|── |── admin.html             # Interface para administração (dashboard)
│   ├── pre-selecao.html       # Interface de julgamento (pré-seleção)
│   ├── triplice.html          # Interface Tríplice
│   ├── painel.html            # Painel de resultado em tempo real
│   └── brackets.html          # Gerenciamento de brackets
├── 📁 styles/
│   ├── base.css               # Reset e estilo base
│   ├── layout.css             # Grid e containers
│   ├── components.css         # Estilização de componentes reutilizáveis
|── |── admin.css              # folha personalizada
├── 📁 scripts/
│   ├── auth.js                # Login e controle de acesso por função
│   ├── preSelecao.js          # Lógica da pré-seleção
│   ├── triplice.js            # Lógica da avaliação tríplice
│   ├── painel.js              # Atualização do painel em tempo real
│   └── brackets.js            # Lógica de chaveamento interativo
├── 📁 utils/
│   ├── api.js                 # Comunicação simulada com backend (fetch)
│   └── socket.js              # Conexão em tempo real (Socket.IO ou WebSocket)
├── 📁 components/
│   ├── slider.js              # Componente de slider reutilizável
│   ├── scoreBox.js            # Caixa de pontuação
│   ├── modal.js               # Modais reutilizáveis
│   └── bracketNode.js         # Nó visual para brackets
└── 📁 assets/
    ├── icons/                 # Ícones SVG ou PNG
    └── fonts/                 # Tipografias personalizadas
```

---

## 🧪 Tecnologias Utilizadas

- **HTML5** + **CSS3 (modularizado)** (com pastas organizadas)
- **JavaScript (Vanilla)** estruturado em módulos
- **Bootstrap v5.3.3 via CDN** (para o layout do sistema)
- **Socket.IO ou WebSocket** (para tempo real)
- **Fetch API** (para simulação de backend)


---

## 🚀 Como Executar Localmente

1. Clone este repositório:

```bash
git clone https://github.com/seuusuario/TriadSJ.git
cd TriadSJ
```

2. Abra o `index.html` no navegador ou use uma extensão como **Live Server** no VSCode.

---

## 🚀 Metodologia Ágil

O desenvolvimento do MVP foi estruturado com base em:

- **Scrum**: Ciclos curtos de entrega com Sprints semanais
- **Kanban**: Organização e priorização visual de tarefas com colunas (To Do, In Progress, Done)
- **Sprint reviews** para acompanhar o progresso.

---

## 📞 Contato

- 📱 WhatsApp: [Fale comigo](https://api.whatsapp.com/send/?phone=5592993818973&text&type=phone_number&app_absent=0)
- 📷 Instagram: [@hunterland95](https://www.instagram.com/hunterland95/)
- 💼 LinkedIn: [Alan Barroncas](https://www.linkedin.com/in/alan-barroncas95/)

---

Desenvolvido com 💡 e 🎧 para a comunidade do **Breaking** no amazonas.
