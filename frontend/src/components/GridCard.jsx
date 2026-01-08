import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GridCard = ({ icon, title, vacancy, delay = 0 }) => {

  return (
    <div data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col gap-2 sm:gap-3 rounded-xl shadow-lg p-4 sm:p-5 md:p-6 
                 bg-white hover:shadow-xl transition-shadow">
      <FontAwesomeIcon icon={icon} className='text-[#00B074] text-2xl sm:text-3xl md:text-4xl' />
      <h2 className='text-base sm:text-lg md:text-xl font-medium text-[var(--heading)]'>{title}</h2>
      <p className='text-sm sm:text-base text-[var(--paragraph-color)]'>{vacancy} Vacancies</p>
    </div>
  )
}

export default GridCard
