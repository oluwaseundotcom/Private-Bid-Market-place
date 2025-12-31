
import { GoogleGenAI, Type } from "@google/genai";
import { NFTMetadata, AIInsight } from "../types";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getNFTInsights = async (nft: NFTMetadata): Promise<AIInsight> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide an auction analysis for this NFT:
        Name: ${nft.name}
        Description: ${nft.description}
        Floor Price: ${nft.floorPrice} ETH
        Category: ${nft.category}
        
        Analyze its potential value and suggest a bidding strategy given that bids are confidential (using Zama FHE). 
        The marketplace takes a 5% treasury fee from the winner.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestedBidRange: { type: Type.STRING },
            marketSentiment: { type: Type.STRING },
            fairValueEstimate: { type: Type.STRING },
            rationale: { type: Type.STRING }
          },
          required: ["suggestedBidRange", "marketSentiment", "fairValueEstimate", "rationale"]
        }
      }
    });

    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr) as AIInsight;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return {
      suggestedBidRange: "10% - 15% above floor price",
      marketSentiment: "Bullish but cautious",
      fairValueEstimate: `${nft.floorPrice * 1.1} ETH`,
      rationale: "Unable to reach Gemini for real-time data. Using baseline estimates."
    };
  }
};
