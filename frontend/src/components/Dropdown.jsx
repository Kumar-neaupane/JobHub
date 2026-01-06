import React from 'react'

const Dropdown = ({ optionName}) => {
  return (
    <div>
    <div>
              <select className="bg-white p-2 rounded-md w-[400px] h-[40px]">
                <option value="">{optionName}</option>
                
                
               
              </select>
            </div>
      
    </div>
  )
}

export default Dropdown
