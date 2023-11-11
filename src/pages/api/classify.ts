import NextConnect from "next-connect";
import multer from "multer";

import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  message: string;
  data?: {
    classifications: {
      filename: string;
      classification: string;
    }[];
  };
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const multerInstance = multer({
  storage: multer.memoryStorage(),
});

const handler = NextConnect<NextApiRequest, NextApiResponse>({
  onNoMatch(_, res) {
    res.status(405).json({ message: "Method not allowed" } satisfies Response);
  },
});

handler.post(multerInstance.array("images"), async (req, res) => {
  const filesArray = req.files as Express.Multer.File[];

  if (!filesArray) {
    res.status(400).json({ message: "No files provided" } satisfies Response);
    return;
  }

  const classifications = await Promise.all(
    filesArray.map(async (file) => {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
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
                      url: `data:${file.mimetype};base64,${file.buffer.toString(
                        "base64"
                      )}`,
                    },
                  },
                ],
              },
            ],
            max_tokens: 300,
          }),
        }
      );

      const json = await response.json();

      return {
        filename: file.originalname,
        classification: json.choices[0].message.content,
      };
    })
  );

  res.status(200).json({
    message: "Success",
    data: {
      classifications,
    },
  } satisfies Response);
});

export default handler;
