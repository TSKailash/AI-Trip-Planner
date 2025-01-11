import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate travel plan for location: Las vegas. for 3 days for couple with cheap budget. Give me hotel options with list of hotel name, price, Rating, descriptions and suggest itinerary with placename, place details, coordinates, ticket pricing, Time to travel each place with best time to visit in JSON Format\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "```json\n{\n  \"trip_name\": \"Las Vegas Budget Getaway for Couples\",\n  \"duration\": \"3 Days\",\n  \"budget\": \"Cheap\",\n  \"travelers\": \"Couple\",\n  \"hotel_options\": [ ... truncated JSON content for brevity ...",
        },
      ],
    },
  ],
});

export const AI_PROMPT =
  'Generate travel plan for location: {location}, for {NoOfDays} days for {size} with {budget} budget. Give me hotel options with list of hotel name, price, Rating, descriptions and suggest itinerary with placename, place details, coordinates, ticket pricing, Time to travel each place with best time to visit in JSON Format';
