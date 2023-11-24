const axios = require("axios");
const apiKey = "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";

const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

type openParams = {
  messages: {
      role: string,
      content?: string
    }[],
  model: string,
}

export const getOpenAI = async (params: openParams) => {
  try {
    const response = await client.post("https://api.openai.com/v1/chat/completions", params);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};