"use client";
import Form from "@components/Form";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const UpdatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!promptId) return alert("Missing PromptId!");
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

useEffect(()=>{
    const getPromptDetails=async ()=>{
        const response = await fetch(`/api/prompt/${promptId}`)
        const data = await response.json();
        setPost({
            prompt: data.prompt,
            tag: data.tag
        })
    }
    if(promptId) getPromptDetails();
},[])

  return (
    <Form
      type="Update"
      submitting={submitting}
      post={post}
      setPost={setPost}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
