import React from 'react'
import project1 from '../assets/project1.jpeg'
import project2 from '../assets/project2.jpeg'
import project3 from '../assets/project3.jpeg'

const ProjectCard = ({title,main}) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
        <img  className= 'p-4' src={project1} alt="" />
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
            {title}
         </h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
        <div className='mt-2 p-2 md:p-4 flex gap-2 ma:gap-4'>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                Demo
            </button>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                Source code
            </button>
        </div>
    </div>
  )
}

export default ProjectCard