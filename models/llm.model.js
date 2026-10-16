import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";

dotenv.config();

const groqLLM = new ChatGroq({
  model: "openai/gpt-oss-120b",
});

const geminiLLM = new ChatGroq({
  model: "openai/gpt-oss-120b",
});

const getModel = async (agent) => {
  switch (agent) {
    case "chat":
      return groqLLM;
    case "search":
      return groqLLM;
    case "coding":
      return geminiLLM;
    default:
      return groqLLM;
  }
};

export default getModel;
