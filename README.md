# 📂 Portfólio — José Cardoso

Analista de Suporte N3 com **15+ anos em TI** que transforma problemas reais do
dia a dia de suporte em **sistemas e automações em Python**.

Os projetos abaixo nasceram de necessidades concretas de operação: gestão de
cadastros, triagem de chamados e controle de ambientes de prova. Alguns rodam em
produção num ambiente institucional e, por isso, têm o código-fonte privado.
Nesses casos, este portfólio descreve o problema, a solução e as decisões técnicas.

---

## 🤖 IA Triagem de Chamados

[![Repositório](https://img.shields.io/badge/código-público-2ea44f)](https://github.com/josecardosodev/nat-ia-triagem)
![Python](https://img.shields.io/badge/Python-3.11+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-009688)
![Claude](https://img.shields.io/badge/IA-Claude%20(Anthropic)-d97757)

API REST que usa IA generativa para classificar chamados técnicos a partir da
descrição em texto livre: sugere **categoria, prioridade, resumo** e aponta
**informações faltantes**, reduzindo a triagem manual do analista.

- FastAPI + Pydantic, integração com a API da Anthropic, PostgreSQL
- Resposta da IA validada antes de ser aceita (formato e valores permitidos)
- Testes com pytest (IA e banco simulados) e CI com GitHub Actions

➡️ [Ver código](https://github.com/josecardosodev/nat-ia-triagem)

---

## 🏛️ Sistema de Gestão de Funcionários

![Status](https://img.shields.io/badge/status-em%20produção-2ea44f)
![Código](https://img.shields.io/badge/código-privado-lightgrey)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B)
![SQLite](https://img.shields.io/badge/SQLite-003B57)

Sistema web em uso contínuo há mais de um ano para a gestão de um programa
institucional: cadastro de funcionários, pagamentos, controle de benefícios,
fichas e fotos, com relatórios gerenciais e dashboards.

- Relatórios com filtros dinâmicos por período e local
- Exportação para CSV e Excel (Pandas + OpenPyXL)
- Dashboards com indicadores visuais e interface organizada por abas
- Testes automatizados com pytest em ambiente isolado, sem tocar os dados de produção

> Código privado por conter regras de negócio e dados pessoais (LGPD).

➡️ [Ver página do projeto](https://github.com/josecardosodev/gestao-funcionarios)

---

## 🛡️ Sistema de Bloqueio para Provas

![Status](https://img.shields.io/badge/status-em%20produção-2ea44f)
![Escala](https://img.shields.io/badge/700%20máquinas-12%20laboratórios-f87171)
![Código](https://img.shields.io/badge/código-privado-lightgrey)
![Python](https://img.shields.io/badge/Python-3776AB)
![Windows](https://img.shields.io/badge/Windows-0078D6)

Sistema cliente-servidor que garante as condições de prova em laboratórios de
informática, bloqueando ferramentas de IA e atalhos durante a avaliação.
É o padrão de **700 computadores em 12 laboratórios**.

- Autenticação cliente-servidor por token
- Bloqueio contínuo de processos e de sites de IA (arquivo hosts e desativação de DNS-over-HTTPS)
- Bloqueio de atalhos de teclado e ferramentas de desenvolvedor
- Log de auditoria em JSONL, watchdog e cliente na bandeja do sistema

> Código privado por segurança: publicar o código facilitaria contornar o bloqueio.

➡️ [Ver página do projeto](https://github.com/josecardosodev/zerocola-vitrine)

---

## 🧰 Competências

**Desenvolvimento:** Python · FastAPI · Streamlit · Pandas · SQLite · PostgreSQL · pytest · Git/GitHub Actions · APIs de IA generativa

**Infraestrutura e suporte:** Active Directory · GPO · Windows · macOS · Microsoft 365 · ITSM/ITIL · Jira Service Management

## 📫 Contato

[GitHub](https://github.com/josecardosodev)
