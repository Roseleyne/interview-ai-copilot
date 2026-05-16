# Estratégia QA - Playwright QA Demo

## Objetivo

Este projeto tem como objetivo demonstrar uma estrutura moderna de automação de testes utilizando Playwright.

## Escopo

- Testes E2E
- Testes de API
- Page Object Model
- Fixtures
- Relatórios HTML
- Screenshots em falha
- Vídeos em falha
- Trace Viewer
- Execução em CI/CD com GitHub Actions

## Estratégia de automação

A estratégia será dividida em camadas:

1. Testes E2E para fluxos críticos.
2. Testes de API para validação de contrato e status code.
3. Testes de regressão para garantir estabilidade.
4. Execução em pipeline a cada push ou pull request.

## Critérios de aceite

- Todos os testes críticos devem passar.
- Nenhum erro 500 deve ocorrer em APIs críticas.
- Relatório HTML deve ser gerado.
- Evidências devem ser armazenadas em caso de falha.

## Métricas acompanhadas

- Total de testes executados.
- Total de testes aprovados.
- Total de testes falhados.
- Tempo médio de execução.
- Falhas por navegador.
- Falhas por endpoint.
