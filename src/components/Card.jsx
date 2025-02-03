import React from 'react'

const Card = ({item}) => {
  return (
    <div className='border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-100'>
      <img src={item.image} alt={item.title} className='rounded-lg'/>
      <div className='p-4'>
        <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
        <p>{item.desc}</p>
        <div className='flex gap-3 mt-4'>
          <button className='bg-black text-white px-3 py-2 rounded-md'>
            <a href={item.github} target='_blank' rel="noopener noreferrer" className='flex gap-1'>
              <img src="/images/githubwhite.png" alt="github" className='w-6'/>Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
