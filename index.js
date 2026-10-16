import graph from "./graph/graph.js";

async function sendMessageFunction(message) {
  const result = await graph.invoke({
    prompt: message,
    aiResponse: "",
    agent: "",
  });
  console.log(result);
}

// sendMessageFunction("helloo how are you?");
sendMessageFunction("am good thanks for asking");
