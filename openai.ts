import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-ZhLUXCBdmgEuHkCV1LMB8oPI",
    apiKey: process.env.OPENAI_API_KEY,
});
console.log(configuration)
const openai = new OpenAIApi(configuration);

export default openai;