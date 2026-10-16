import getModel from "../models/llm.model.js";

export const router = async (state) => {
  console.log(state, "from router");
  const llm = await getModel("router");
  let prompt = `
  You are an agent router

  Available agents:
  - chat
  - search
  - coding

  Rules:

  chat:
   General conversation,
   explanation,
   learning,
   questions.


  search:
   current events,
   latest information,
   news,
   recent developments,
   internet lookup.
   

  coding:
   Generate code,
   debug code,
   build projects,
   architecture,
   API design.

 Return ONLY One Word

 chat
 search
 coding

 User Query

 ${state.prompt}
  
  `;

  console.log("route llm calling");
  const response = await llm.invoke(prompt);

  return {
    ...state,
    agent: response?.content?.trim()?.toLowerCase(),
  };
};
