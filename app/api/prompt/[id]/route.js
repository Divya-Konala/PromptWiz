import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id);
    if (!prompt) return new Response("prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("failed to fetch the prompt", { status: 500 });
  }
};

//PATCH - update
export const PATCH = async (req, { params }) => {
  try {
    const { prompt, tag } = await req.json();
    await connectToDB();
    const updatedPrompt = await Prompt.findByIdAndUpdate(params.id, {
      prompt: prompt,
      tag: tag,
    });
    if (!updatedPrompt)
      return new Response("prompt not found", { status: 404 });
    return new Response("prompt updated successfully!", { status: 200 });
  } catch (error) {
    return new Response("failed to fetch all prompts", { status: 500 });
  }
};
// DELETE

export const DELETE = async (res, { params }) => {
  try {
    await connectToDB();
    const deletedPrompt = await Prompt.findByIdAndRemove(params.id);
    if (!deletedPrompt)
      return new Response("prompt not found", { status: 404 });
    return new Response("prompt deleted successfully!", { status: 200 });
  } catch (error) {
    return new Response("failed to fetch all prompts", { status: 500 });
  }
};
