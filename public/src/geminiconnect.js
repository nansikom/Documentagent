import { GoogleGenAI } from "@google/genai";
import path from 'path';
import fs from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
export async function getdocuments(question) {
  const documentspath = path.join(process.cwd(), 'documents');
  const files = await fs.readdir((documentspath));
  let documents = '';
  // for each file in  files 
  for (const file of files){
    // reads the entire content of the file 
    const content = await fs.readFile(path.join(documentspath, file), 'utf-8');
    // get the file name and add the content to the documents variable
    documents += `${file}: ${content}\n\n`;
  }
  return documents;
}

export async function askGemini(question) {
  const documents = await getdocuments(question);
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `You are a document assistant. The user will ask a question related to the documents. 
    Here are the documents to analyze:
    ${documents}
    User Question:  ${question}
    
    Please analyze these documents and answer the users question based on the information provided in them.`,
  });
  console.log(response.text)
  return response.text;
}

