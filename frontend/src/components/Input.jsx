import React from "react";

const Input = ({ placeholder }) => {
  return (
    <div>
      {/* <div>
        <select className="bg-white p-2 rounded-md w-[400px] h-[40px]">
          <option value="">Select Category</option>
          <option value="1">Technology</option>
          <option value="2">Marketing</option>
          <option value="3">Design</option>
        </select>
      </div> */}
        <div>
              <input 
                className="bg-white border-0 hover:border-0 p-2 rounded-md w-[400px]" 
               placeholder={placeholder}
              />
            </div>
    </div>
  );
};

export default Input;
