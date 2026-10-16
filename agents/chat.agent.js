import getModel from "../models/llm.model.js";

export const chatAgent = async (state) => {
  const llm = await getModel("chat");

  let prompt = `
    You are CortexAI, an integlligent AI assistant.
    `;

  const response = await llm.invoke([
    { role: "system", content: prompt },
    {
      role: "human",
      content: state.prompt,
    },
  ]);

  return {
    ...state,
    aiResponse: response.content,
  };
};
