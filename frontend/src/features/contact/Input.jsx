import React from 'react'

const Input = ({error,...props}) => {
  return (
    <div className='contac-inputs  flex flex-col gap-2'>
      <label className='text-xl text-[var(--paragraph-color)]'  htmlFor={props.id}>{props.label}</label> 
      <input {...props} className='border-1 border-gray-300 outline-none p-3 rounded-sm w-full hover:border-green-500 transition delay-100'/>
    {error && <span className='text-red-500'>{error.message}</span>}
    </div>
  )
}

export default Input