# 🤖 Interview AI Copilot

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Last Commit](https://img.shields.io/github/last-commit/Roseleyne/interview-ai-copilot)](https://github.com/Roseleyne/interview-ai-copilot/commits/main)
[![HTML](https://img.shields.io/badge/built%20with-HTML%20%2F%20JS-orange)](https://github.com/Roseleyne/interview-ai-copilot)
[![Topics](https://img.shields.io/badge/topics-QA%20%7C%20SDET%20%7C%20Playwright%20%7C%20Cypress-blue)](https://github.com/Roseleyne/interview-ai-copilot)

> Interview preparation dashboard for QA/SDET engineers — track your progress across 6 categories.

A tool built to support both **pre-interview practice** and **real-time interview assistance**, focused on QA Engineering and SDET roles.

---

## 🖥️ Demo

![Dashboard screenshot](docs/screenshot-dashboard.png)

> *Dashboard showing progress across 31 QA/SDET interview questions, organized by category with difficulty levels and mastery tracking.*

---

## 📊 Progress Dashboard

An interactive HTML/JS dashboard to track your mastery of **31 interview questions** across 6 key categories:

| Category              | Topics                                               |
| --------------------- | ---------------------------------------------------- |
| 🧪 QA Fundamentals     | Verification vs validation, test types, test pyramid |
| 🤖 Test Automation     | Playwright, Cypress, Page Object Model, flaky tests  |
| 🔌 API Testing         | Contract testing, REST, GraphQL, OAuth2, mocks       |
| ⚡ Performance Testing | Load/stress/soak tests, JMeter, k6, percentiles      |
| 🚀 CI/CD & DevOps      | GitHub Actions, shift-left, Docker, pipelines        |
| 💬 Behavioral          | Situational questions for QA/SDET interviews         |

### Features

- ✅ Mark questions as **Dominada** or **Revisando**
- 📈 Visual progress bar per category and overall
- 💾 Progress saved locally in the browser (no backend needed)
- 🎯 Questions tagged by difficulty: `basic` / `intermediate` / `advanced`
- 📊 GitHub activity dashboard (`github-dashboard.html`)

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Roseleyne/interview-ai-copilot.git
cd interview-ai-copilot

# Open the dashboard directly in your browser — no install needed
open interview-progress.html
```

That's it. No dependencies, no build step.

---

## 🗂️ Project Structure

```
interview-ai-copilot/
├── interview-progress.html   # Main QA/SDET interview dashboard (31 questions)
├── github-dashboard.html     # GitHub activity tracker
└── README.md
```

---

## 🗺️ Roadmap

- [ ] Timer mode for simulating real interview pressure
- [ ] Export progress report as PDF
- [ ] Add Playwright/Cypress code challenge examples
- [ ] AI-powered hint system (Python + LLM backend)
- [ ] Support for custom question sets via JSON
- [ ] GitHub Actions CI badge

---

## 🚧 Stack

```
frontend:   HTML · CSS · JavaScript (vanilla)
storage:    localStorage
ci_cd:      GitHub Actions (coming soon)
```

---

## 👩‍💻 Author

**Roseleyne Duarte Silva** — Senior QA Engineer | SDET  
8+ years building scalable automation frameworks in fintech, e-commerce and marketplace.  
Stack: Cypress · Playwright · Robot Framework · Appium · JMeter · Postman

[![GitHub](https://img.shields.io/badge/GitHub-Roseleyne-181717?logo=github)](https://github.com/Roseleyne)

---

## 📄 License

MIT
