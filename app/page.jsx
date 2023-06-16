import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Descubri & Comparti 
            <br  className='max-md:hidden'/>
            <span className='orange_gradient text-center'>Prompts  IA</span>

        </h1>
        <p className='desc text-center'>
        Promptopia es una herramienta de prompt de inteligencia artificial de código abierto para que el mundo moderno pueda 
       descubrir, crear y compartir prompts creativas.
        </p>
        <Feed/>
    </section>
  )
}

export default Home