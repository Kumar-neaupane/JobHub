import React from 'react'

const Textarea = ({placeholder,className,label,wrapperClassName}) => {
  return (
       <div className={`job-description mt-6 ${wrapperClassName || ''}`}>
          <h1 className='text-[var(--paragraph-color)] font-bold'>{label}</h1>
          <textarea className={` border-2 border-gray-300 outline-0 p-2 my-2 rounded-lg h-40 hover:border-green-500 transition delay-100 ${className}`} placeholder={placeholder}>


          </textarea>
           
           
           
           </div>
  )
}

export default Textarea
