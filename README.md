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
TRIADS/
├── assets/
│   ├── fonts/
│   └── icons/
│
├── components/
│   ├── slider.js
│   └── modal/                   # Novos componentes modais
│       ├── criarEventoModal.html
│       └── gerenciarEventoModal.html
│
├── pages/
│   ├── admin/                   # Separando por domínio
│   │   ├── index.html           # Era admin.html
│   │   └── relatorios.html
│   ├── brackets/
│   │   └── index.html
│   ├── painel/
│   │   └── index.html
│   ├── pre-selecao/
│   │   └── index.html
│   └── triplice/
│       └── index.html
│
├── scripts/
│   ├── admin/
│   │   ├── index.js
│   │   ├── eventos.js           # Fluxo de eventos
│   │   ├── jurados.js           # Jurados
│   │   └── relatorios.js        # Relatórios
│   ├── brackets.js
│   ├── painel.js
│   ├── preSelecao.js
│   ├── triplice.js
│   └── auth.js
│
├── styles/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── admin/
│   │   ├── index.css
│   │   └── modal.css
│   └── painel/
│       └── painel.css
│
├── utils/
│   ├── api.js
│   └── socket.js
│
├── index.html
└── README.md

```


## 🧪 Tecnologias Utilizadas

- **HTML5** + **CSS3 (modularizado)** (com pastas organizadas)
- **JavaScript (Vanilla)** estruturado em módulos
- **Bootstrap v5.3.3 via CDN** (para o layout do sistema)
- **Socket.IO ou WebSocket** (para tempo real)
- **Fetch API** (para simulação de backend)
=======
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
