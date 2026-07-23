# 🚀 Universal Exam Simulator

A modern, responsive, and completely static web-based practice exam simulator. Originally designed for the Databricks Certified Data Engineer Associate exam, it has been refactored to be a **universal platform** where users can create their own interactive quizzes from any PDF or text document using their favorite AI (ChatGPT, Claude, Gemini, etc.).

## 🌍 Live Demo

This project is hosted on GitHub Pages! You can use the application directly from your browser without installing anything:

👉 **[Play Exam Simulator](https://alx094.github.io/exam-simulator/)**

## ✨ Features

- **Bring Your Own Exam (BYOE)**: Easily create an interactive test from any PDF document.
- **Modern Glassmorphism UI**: A beautiful, highly aesthetic design with smooth animations.
- **Instant Feedback**: Get immediate visual feedback on whether your answers are correct or incorrect.
- **Progress Tracking**: See your progression via an interactive progress bar.
- **Final Results Screen**: View your final score, percentage, and an interactive animation indicating if you passed or failed.
- **Client-Side Only**: 100% HTML, CSS, and TypeScript. No backend server is required!
- **Shuffled Options**: Answer options are randomized per question, so the correct one is never stuck in the same position.

## 🛠️ How to Use It

1. **Extract your questions via AI**: Open the web app and copy the provided prompt template.
2. **Generate the JSON**: Go to your favorite LLM (e.g., ChatGPT or Claude). Paste the prompt along with the text or PDF of the exam you want to practice. The AI will return a perfectly formatted JSON array containing all questions, options, and correct answers.
3. **Paste & Play**: Paste the generated JSON directly into the text area on the web app and click **Start Exam**.
4. **Test Yourself**: Complete the interactive quiz and review your final score at the end!

## 💻 Local Development

This project is built with **TypeScript** and **Vite**.

1. Clone this repository:
   ```bash
   git clone https://github.com/alx094/exam-simulator.git
   cd exam-simulator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server (hot reload):
   ```bash
   npm run dev
   ```
4. Build for production (type-checks with `tsc`, then bundles into `dist/`):
   ```bash
   npm run build
   ```

## 🚀 Deployment

Pushing to `main` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds the site and publishes `dist/` to GitHub Pages.

> **One-time setup:** in the repo settings, set **Settings → Pages → Build and
> deployment → Source** to **GitHub Actions**.

## 📜 Optional: Local Parsing Script

If you already have the exam text extracted (e.g. from a PDF), a TypeScript
helper is included to turn it into the JSON array the app expects:

```bash
npm run parse -- extracted_text.txt questions.json
```

Adapt `scripts/parse-questions.ts` to match your document's layout.
