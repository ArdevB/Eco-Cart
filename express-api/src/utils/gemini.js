import config from "../config/config.js";
import axios from "axios";

const promptGemini = async (promptMessage) => {
  const response = await axios.post(
    config.gemini.url,
    {
      contents: [
        {
          parts: [
            {
              text: promptMessage,
            },
          ],
        },
      ],
    },
    {
      headers: {
        "x-goog-api-key": config.gemini.apiKey,
      },
    }
  );

  return response.data.candidates[0].content.parts[0].text;
};

export default promptGemini;
