import React from 'react'
import Feed from '@components/feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Descubri & Comparti 
            <br  className='max-md:hidden'/>
            <span className='orange_gradient text-center'>Respuestas  IA</span>

        </h1>
        <p className='desc text-center'>
            Promptopia es una herramienta  open-source para crear y compartir consultas a IA
        </p>
        <Feed/>
    </section>
  )
}

export default Home