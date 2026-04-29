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
- **Client-Side Only**: 100% HTML, CSS, and vanilla JavaScript. No backend server is required!

## 🛠️ How to Use It

1. **Extract your questions via AI**: Open the web app and copy the provided prompt template.
2. **Generate the JSON**: Go to your favorite LLM (e.g., ChatGPT or Claude). Paste the prompt along with the text or PDF of the exam you want to practice. The AI will return a perfectly formatted JSON array containing all questions, options, and correct answers.
3. **Paste & Play**: Paste the generated JSON directly into the text area on the web app and click **Start Exam**.
4. **Test Yourself**: Complete the interactive quiz and review your final score at the end!

## 💻 Local Development

If you want to run this simulator locally or make your own UI modifications:

1. Clone this repository:
   ```bash
   git clone https://github.com/alx094/exam-simulator.git
   ```
2. Open the directory:
   ```bash
   cd exam-simulator
   ```
3. Open `index.html` directly in your web browser:
   ```bash
   open index.html
   ```

## 📜 Optional: Python Parsing Script

If you prefer to extract questions from a PDF locally without an LLM, a Python script (`parse_questions.py`) is included as an example.

1. Install requirements:
   ```bash
   pip install pdfminer.six
   ```
2. Adapt the script to extract the text and output it as a JSON array compatible with the app's structure.
