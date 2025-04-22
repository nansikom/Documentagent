import { askGemini } from './public/src/geminiconnect.js';
async function main (){
    try {
        const question  = process.argv[2];
        if (!question) {
            console.error('Please provide a question as a command-line argument.');
            process.exit(1);
        }
        const answer = await askGemini(question);
        console.log(answer);
    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
    
    
}
main();