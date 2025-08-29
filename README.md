# Leveraging The Power Of The Gemini API With Prompt Engineering <img src="https://ai.google.dev/static/site-assets/images/share.png" alt="Google Gemini Logo" width="30" height="30">

This project allows you to query your local documents using the **Google Gemini API** with advanced prompt engineering techniques. It reads all files in a `documents/` folder, sends their content to Gemini with optimized prompts, and answers user questions based on the information within those documents.

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
This initialises npm for your environment
npm init -y
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

### documents/file1.txt.All these files can be fed to the Gemini api even with a database if larger documents need analysis
```
SECTION 1: EMPLOYEE WORKING HOURS AND LEAVE POLICY

Employees are required to work 40 hours per week, typically Monday through Friday. Core working hours are 10:00 AM to 4:00 PM. Outside of these hours, employees may arrange flexible schedules with prior supervisor approval. Remote work is permitted up to 3 days per week.

All employees are entitled to:
- 15 paid vacation days per calendar year.
- 5 paid sick days.
- Unused vacation days can roll over up to a maximum of 5 days.
- National holidays are automatically granted and do not count against vacation.

Leave requests should be submitted via the HR portal at least 7 days in advance for planned vacations and immediately for unplanned absences such as illness.

---

```

### User Question:
```
When are the employee working hours ?
```

### Gemini Answer:
```
Employees are required to work 40 hours per week, typically Monday through Friday. Core working hours are 10:00 AM to 4:00 PM. Outside of these hours, employees may arrange flexible schedules with prior supervisor approval. Remote work is permitted up to 3 days per week.

All employees are entitled to:
- 15 paid vacation days per calendar year.
- 5 paid sick days.
- Unused vacation days can roll over up to a maximum of 5 days.
- National holidays are automatically granted and do not count against vacation.

Leave requests should be submitted via the HR portal at least 7 days in advance for planned vacations and immediately for unplanned absences such as illness..
```

## 🚀 Quick Start

1. **Install:** `npm install`
2. **Add API Key:** Create `.env` with `GEMINI_API_KEY=your_key`
3. **Add Documents:** Put text files in `documents/` folder
4. **Run:** Import and use `askGemini()` function
