"use client";
import {useEffect, useState} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@components/Form';

const EditPrompt = () => {

    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
            prompt:'',
            tag: ''
    });
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');

    const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt/${promptId}`)
        const data =  await response.json();
        setPost({
            prompt: data.prompt,
            tag: data.tag
           })
    }

    useEffect(() => {
        if(promptId) getPromptDetails();  
    },[promptId])

    const upDatedPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        if (!promptId) return alert('Prompt Id no encontrado')
        try {
          const response = await fetch(`/api/prompt/${promptId}`,
          {
            method:'PATCH',
            body: JSON.stringify({
              prompt: post.prompt,
              tag: post.tag
            })
          } )
          if (response.ok) {
            router.push('/')
          }
        } catch (error) {
          console.log(error)
        } finally {
          setSubmitting(false)
        }
  
      }


  return (
    <Form 
        type="Editar"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={upDatedPrompt}
    />
  )
}

export default EditPrompt