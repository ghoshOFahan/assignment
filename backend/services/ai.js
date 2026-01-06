const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv/config");
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY not found in environment variables.");
}
const ai = new GoogleGenerativeAI(apiKey);
const model = ai.getGenerativeModel({
  model: "models/gemini-2.5-flash",
});
const emailGenerator = async (purpose, recipient_name, tone) => {
  const prompt = `
  Write an ${tone} toned email to ${recipient_name} with the purpose of ${purpose}
  OUTPUT RULES:
  1.Include a subject line related to the topic within 10 words
  2.Avoid giving suggestions
  3.Give proper designations and salutations
  4.Email should be customer-friendly
  3.Every email body should be within 4 sentences
  4.Use a realistic sender's name
  `;
  const result = await model.generateContent(prompt);
  const output = result.response.text().trim();
  console.log(output);
  return output;
};
module.exports = emailGenerator;
