# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Este repositório é um monorepo de estudos de QA moderno e ferramentas de IA, composto por dois projetos independentes:

- **`playwright-qa-demo/`** — Automação de testes E2E e API com Playwright (JavaScript/Node.js)
- **`interview-ai-copilot/`** — Ferramenta de preparação para entrevistas assistida por voz com IA (Python)

> **Nota:** O working tree do repositório está atualmente vazio (apenas `.claude/` rastreado). Os projetos vivem na história do git; para trabalhar com eles, faça checkout ou recrie os diretórios a partir do histórico.

---

## playwright-qa-demo

### Comandos principais

```bash
cd playwright-qa-demo
npm install
npx playwright install          # baixar browsers

npm test                        # todos os testes
npm run test:e2e                # apenas E2E
npm run test:api                # apenas API
npm run test:headed             # rodar com browser visível
npm run test:debug              # modo debug interativo
npm run test:ui                 # Playwright UI mode
npx playwright test tests/e2e/login.spec.js   # teste único por arquivo
npx playwright test -g "deve acessar"         # teste único por nome
npm run report                  # abrir relatório HTML
npm run lint                    # ESLint
npm run format                  # Prettier
```

### Arquitetura

- **Page Object Model** em `pages/` — cada página do sistema tem uma classe com locators e actions encapsulados (ex: `LoginPage`). Locators usam `getByTestId` como convenção primária.
- **Testes em `tests/e2e/`** usam as page objects e o utilitário `utils/logger.js` para log de execução em `logs/test-execution.log`.
- **Testes em `tests/api/`** criam `request.newContext` diretamente (sem page object), testando contratos HTTP contra APIs reais (ex: `reqres.in`).
- **`playwright.config.js`** — `baseURL` vem de `process.env.BASE_URL` (`.env`). Roda em Chromium, Firefox e WebKit em paralelo. Em CI: 2 workers, 2 retries.
- **`data/users.json`** — dados de teste externalizados, importados pelos specs.
- **CI via `.github/workflows/playwright.yml`** e `docker-compose.yml` na raiz.

### Variáveis de ambiente

Copiar `.env.example` para `.env`:
```
BASE_URL=https://example.com
```

---

## interview-ai-copilot

### Requisitos

```bash
cd interview-ai-copilot
pip install -r requirements.txt   # openai, python-dotenv, streamlit
```

Criar `.env` com:
```
OPENAI_API_KEY=sk-...
```

### Comandos principais

```bash
streamlit run interview-ai-copilot/app.py   # UI principal
python listen_audio.py                       # gravar áudio (device ID precisa ajuste)
python transcribe.py                         # verificar chave OpenAI
python translate.py                          # traduzir texto via GPT
python audio_test.py                         # teste de captura de áudio
```

### Arquitetura

- **`interview-ai-copilot/app.py`** — entry point Streamlit (atualmente stub de teste).
- **`knowledge_base/`** — arquivos Markdown com currículo, experiências, projetos e respostas de entrevista. São a base de conhecimento injetada nos prompts.
- **`prompts/system_prompt.md`** — system prompt do assistente de entrevista.
- **Scripts utilitários raiz** (`listen_audio.py`, `transcribe.py`, `translate.py`, `audio_test.py`) — scripts de exploração/prototipação standalone, não fazem parte da aplicação principal.
- O `device` de áudio em `listen_audio.py` / `app.py` é hardcoded e pode precisar ajuste conforme hardware local (`sd.query_devices()` para listar).
