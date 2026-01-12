import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faClockFour, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import Button from '../../../components/Button';

import { useState } from 'react';
const JobCard = ({ companyName, src, location, time, salary, date,desc,skills }) => {
  const [liked, setLiked] = useState("text-green-500");
  return (
    <div className='divCard flex flex-col lg:flex-row justify-between items-start lg:items-center shadow-lg transition-shadow hover:shadow-xl rounded-sm bg-white p-4 sm:p-5 md:p-6 gap-4 lg:gap-0 overflow-hidden'>
      <div className='left flex flex-row gap-3 sm:gap-4 w-full lg:w-auto'>
        <div className='companyImage w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0'>
          <img src={src} alt={companyName} className='w-full h-full object-contain' />
        </div>
        <div className='companydetails flex-1 min-w-0'>
          <h1 className='text-base sm:text-lg md:text-xl font-semibold text-[var(--heading)] mb-2 truncate'>{companyName}</h1>
          <p className='text-[var(--paragraph-color)] pt-1'>{desc}.</p>
          <p className='pt-1 text-lg text-[var(--paragraph-color)] py-2 font-extrabold'>{skills}</p>
          <div className='companydetails flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-[var(--paragraph-color)]'>
            <span className='flex items-center gap-1'>
              <FontAwesomeIcon icon={faLocationPin} className="text-[var(--bg-color)]" />
              <span className='truncate'>{location}</span>
            </span>
            <span className='flex items-center gap-1'>
              <FontAwesomeIcon icon={faClockFour} className="text-[var(--bg-color)]" />
              {time}
            </span>
            <span className='flex items-center gap-1'>
              <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-[var(--bg-color)]" />
              <span className='truncate'>{salary}</span>
            </span>
          </div>
        </div>
      </div>

      <div className='right flex flex-col gap-3 w-full lg:w-auto'>
        <div className='top flex flex-row gap-2 sm:gap-3 justify-start lg:justify-center items-center flex-wrap'>
          <FontAwesomeIcon
            icon={faHeart}
            className={`bg-green-200 ${liked} p-2 sm:p-2.5 rounded-sm hover:shadow-2xl cursor-pointer transition text-base sm:text-lg`}
            onClick={() => setLiked(liked === "text-green-500 bg-green-200" ? "text-red-500 bg-red-200" : "text-green-500 bg-green-200")}
          />
          <Button className="rounded-sm flex-1 sm:flex-initial" btnName="Apply Now" />
        </div>
        <div className='bottompart text-xs sm:text-sm md:text-base text-[var(--paragraph-color)]'>
          <p className='flex items-center gap-1'>
            <FontAwesomeIcon icon={faCalendarDays} className="text-[var(--bg-color)]" />
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobCard
