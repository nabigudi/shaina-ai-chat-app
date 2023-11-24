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