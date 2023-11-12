import NextConnect from "next-connect";
import multer from "multer";
import { z } from "zod";

import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  message: string;
  data?:
    | {
        image: string;
        text: string;
      }[]
    | z.ZodIssue[];
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
  onError(err, _, res) {
    console.error(err);

    if (err instanceof z.ZodError) {
      res.status(400).json({
        message: "Invalid request body",
        data: err.issues,
      } satisfies Response);
      return;
    }

    res
      .status(500)
      .json({ message: "Internal server error" } satisfies Response);
  },
});

const requestSchema = z.object({
  type: z.enum(["text", "image"]),
  theme: z.enum([
    "dark-sci-fi",
    "cosmic-comedy",
    "epic-adventure",
    "romantic-space-opera",
    "cosmic-horror",
    "space-fantasy",
    "time-travel-paradox",
  ]),
  text: z.string().optional(),
  image: z.string().optional(),
});

handler.post(multerInstance.array("images"), async (req, res) => {
  const filesArray = req.files as Express.Multer.File[];
  const { type, theme, text } = requestSchema.parse(req.body);

  if (!filesArray && type === "image") {
    res
      .status(400)
      .json({ message: "No image files provided" } satisfies Response);
    return;
  }

  if (!text && type === "text") {
    res.status(400).json({ message: "No text provided" } satisfies Response);
    return;
  }

  let story = "";

  if (type === "image") {
    const descriptions = await Promise.all(
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
                      text: `Describe the space imagery in a ${theme} theme. If the image is not related to space, make up a description.`,
                    },
                    {
                      type: "image_url",
                      image_url: {
                        url: `data:${
                          file.mimetype
                        };base64,${file.buffer.toString("base64")}`,
                      },
                    },
                  ],
                },
              ],
              max_tokens: 1800,
            }),
          }
        );

        const json = await response.json();

        return json.choices[0].message.content as string;
      })
    );

    const storyResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: `Write a complete children's story incorporating the following descriptions in a ${theme} theme. Do not include a title. Separate paragraphs with two new lines.`,
                },
                {
                  type: "text",
                  text: descriptions.join("\n\n"),
                },
              ],
            },
          ],
          max_tokens: 1800,
        }),
      }
    );

    const storyJson = await storyResponse.json();
    story = storyJson.choices[0].message.content as string;
  }

  if (type === "text") {
    const storyResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: `Write a complete children's story incorporating the following description in a ${theme} theme. Improve the description as well to fit the ${theme} theme. Do not include a title. Separate paragraphs with two new lines.`,
                },
                {
                  type: "text",
                  text,
                },
              ],
            },
          ],
          max_tokens: 1800,
        }),
      }
    );

    const storyJson = await storyResponse.json();
    story = storyJson.choices[0].message.content as string;
  }

  const paragraphs = story.split("\n\n");

  const images = await Promise.all(
    paragraphs.map(async (paragraph) => {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            prompt: `Generate space-themed images for a story. Use the following paragraph as well: ${paragraph}`,
            n: 1,
            size: "1024x1024",
          }),
        }
      );

      const json = await response.json();

      return json.data[0].url;
    })
  );

  res.status(200).json({
    message: "Story generated!",
    data: images.map((image, index) => ({
      image,
      text: paragraphs[index],
    })),
  } satisfies Response);
});

export default handler;
