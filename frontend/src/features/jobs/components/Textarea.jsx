import React from 'react'

const Textarea = ({placeholder,className,label,wrapperClassName}) => {
  return (
       <div className={`job-description mt-4 sm:mt-6 ${wrapperClassName || ''}`}>
          <h1 className='text-sm sm:text-base md:text-lg text-[var(--paragraph-color)] font-bold mb-2'>{label}</h1>
          <textarea className={`border-2 border-gray-300 outline-0 p-2 sm:p-3 my-2 rounded-lg h-32 sm:h-40 md:h-48 hover:border-green-500 transition delay-100 text-sm sm:text-base w-full ${className || ''}`} placeholder={placeholder}>


          </textarea>
           
           
           
           </div>
  )
}

export default Textarea
