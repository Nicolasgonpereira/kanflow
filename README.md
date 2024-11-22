# Kanflow

Este é um **web app de Kanban** desenvolvido em Angular, projetado para facilitar a gestão de tarefas e projetos de forma responsiva e intuitiva. Com funcionalidades como criação de boards, gerenciamento de tarefas e subtarefas, o app oferece uma experiência de usuário fluida e moderna.

## Funcionalidades

Os usuários poderão:

- **Responsividade**: Visualizar o layout ideal do app para diferentes tamanhos de tela.
- **Estados de interação**: Ver estados de hover para todos os elementos interativos na página.
- **CRUD completo**: Criar, ler, atualizar e excluir boards e tarefas.
- **Validação de formulários**: Receber validações ao criar ou editar boards e tarefas.
- **Subtarefas**: Marcar subtarefas como concluídas e mover tarefas entre colunas.
- **Modo claro/escuro**: Alternar entre os temas claro e escuro.
- **Drag and Drop**: Permitir que os usuários arrastem e soltem tarefas para alterar status e reordená-las em uma coluna.
- **Persistência local**: Manter as alterações salvas, mesmo após atualizar o navegador (utilizando **localStorage**).

---

## Tecnologias Utilizadas

- **Framework**: Angular
- **Linguagem**: TypeScript
- **Armazenamento Local**: localStorage para persistência dos dados.

---

## Como Iniciar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório:**
	```bash
	git clone https://github.com/Nicolasgonpereira/kanflow.git
	cd kanflow
	```

2. **Instale as dependências:**
	```bash
	npm install
	```

3. **Inicie o servidor de desenvolvimento:**
	```bash
	ng serve
	```

Acesse o app no navegador através da URL: http://localhost:4200
