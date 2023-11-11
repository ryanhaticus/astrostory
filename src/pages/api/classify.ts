// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  text: string;
};

type Response = {
  message: string;
  data?: Data;
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }

  if (!req.body) {
    res.status(400).json({ message: "No image provided" });
  }

  const base64ImageUrl = `data:image/jpeg;base64,${req.body}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Classify the given space imagery. If the image is not from space, please say so.",
            },
            {
              type: "image_url",
              image_url: {
                url: base64ImageUrl,
              },
            },
          ],
        },
      ],
      max_tokens: 300,
    }),
  });

  const json = (await response.json()) as {
    choices: {
      message: {
        content: string;
      };
    }[];
  };

  if (json.choices.length === 0) {
    res
      .status(500)
      .json({ message: "Couldn't classify image. Please try again." });
  }

  res.status(200).json({
    message: "Success",
    data: {
      text: json.choices[0].message.content,
    },
  });
};
