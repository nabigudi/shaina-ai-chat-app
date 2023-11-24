const axios = require("axios");
require('dotenv').config();
const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

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