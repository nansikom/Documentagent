**Document Q&A with Google Gemini**

This project allows you to query your local documents using the **Google Gemini API**.  
It reads all files in a `documents/` folder, sends their content to Gemini, and answers user questions based on the information within those documents.


**🚀 Features**
- Reads and aggregates all files inside the `documents/` directory
- Passes the content to Google Gemini (`gemini-2.0-flash` model)
- Answers questions using the context from your documents
- Environment-based API key management with **dotenv**

---

**📂 Project Structure**

---

**⚙️ Setup**
* Clone the repo*
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
Install dependencies

npm install


Set up environment variables
Create a .env file in the root directory and add your Gemini API key:

GEMINI_API_KEY=your_api_key_here


Add your documents
Put your text files inside the documents/ folder.
Example:

documents/
├── file1.txt
├── file2.txt

📝 Usage
Ask Gemini a Question

In your index.js (or wherever you call it), use:

import { askGemini } from './index.js';

(async () => {
  const answer = await askGemini("What is the summary of file1?");
  console.log("Gemini Answer:", answer);
})();

📦 Dependencies

@google/genai

dotenv

Node.js built-in modules: path, fs/promises

🔒 Notes

Make sure .env is in your .gitignore to avoid exposing your API key.

The larger your documents folder, the more tokens will be consumed when querying Gemini.

📌 Example

documents/file1.txt

OpenAI was founded in 2015.


User Question:

When was OpenAI founded?


Gemini Answer:

OpenAI was founded in 2015.


Want me to also make a **shorter quick-start version** (just install, add docs, run) in case you plan
