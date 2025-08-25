# Document Q&A with Google Gemini

This project allows you to query your local documents using the **Google Gemini API**. It reads all files in a `documents/` folder, sends their content to Gemini, and answers user questions based on the information within those documents.

## 🚀 Features

* Reads and aggregates all files inside the `documents/` directory
* Passes the content to Google Gemini (`gemini-2.0-flash` model)
* Answers questions using the context from your documents
* Environment-based API key management with **dotenv**

## 📂 Project Structure

```
your-project/
├── documents/
│   ├── file1.txt
│   └── file2.txt
├── index.js
├── package.json
├── .env
└── README.md
```

## ⚙️ Setup

### Clone The Repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add your Gemini API key:

```env
GEMINI_API_KEY=your_api_key_here
```

### Add Your Documents

Put your text files inside the `documents/` folder. Example:

```
documents/
├── file1.txt
├── file2.txt
└── file3.txt
```

## 📝 Usage

### Ask Gemini A Question

In your `index.js` (or wherever you call it), use:

```javascript
import { askGemini } from './index.js';

(async () => {
  const answer = await askGemini("What is the summary of file1?");
  console.log("Gemini Answer:", answer);
})();
```

## 📦 Dependencies

* `@google/genai`
* `dotenv`
* Node.js built-in modules: `path`, `fs/promises`

## 🔒 Notes

* Make sure `.env` is in your `.gitignore` to avoid exposing your API key
* The larger your documents folder, the more tokens will be consumed when querying Gemini

## 📌 Example

### documents/file1.txt
```
OpenAI was founded in 2015.
```

### User Question:
```
When was OpenAI founded?
```

### Gemini Answer:
```
OpenAI was founded in 2015.
```

## 🚀 Quick Start

1. **Install:** `npm install`
2. **Add API Key:** Create `.env` with `GEMINI_API_KEY=your_key`
3. **Add Documents:** Put text files in `documents/` folder
4. **Run:** Import and use `askGemini()` function
