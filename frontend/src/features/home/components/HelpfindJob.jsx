import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import groupimage from '../../../assets/images/groupimage.jpg'
import groupimage2 from '../../../assets/images/groupimage2.jpg'
import groupimage3 from '../../../assets/images/groupimage3.jpg'
import group4 from '../../../assets/images/group4.jpg'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';

const HelpfindJob = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] shadow-2xl pb-8 lg:pb-0' data-aos="fade-up" data-aos-delay="100">
      {/* Image Section */}
      <div className='imageSection flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full lg:w-1/2'>
        <div className='upperImage flex flex-col gap-2 sm:gap-3 md:gap-4 w-full sm:w-1/2'>
          <img src={groupimage} alt="Help find job" className='h-[200px] sm:h-[250px] md:h-[300px] w-full object-cover rounded-lg' />
          <img src={groupimage2} alt="Help find job" className='h-[200px] sm:h-[280px] md:h-[350px] w-full object-cover rounded-lg' />
        </div>
        <div className='secondPart flex flex-col gap-2 sm:gap-3 md:gap-4 w-full sm:w-1/2'>
          <img src={groupimage3} alt="Help find job" className='h-[200px] sm:h-[250px] md:h-[300px] w-full object-cover rounded-lg' />
          <img src={group4} alt="Help find job" className='h-[200px] sm:h-[240px] md:h-[300px] w-full object-cover rounded-lg' />
        </div>
      </div>

      {/* Text and Buttons Section */}
      <div className='textAndButtons w-full lg:w-1/2 lg:ml-8 xl:ml-[70px] flex flex-col justify-center'>
        <div className='mb-6 sm:mb-8 md:mb-9'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-[900] text-[#2B3940] leading-tight'>
            We Help To Get The Best Job And Find A Talent
          </h1>
        </div>
        <p className='text-[#666565] text-sm sm:text-base md:text-lg lg:text-[18px] mb-4 sm:mb-5' data-aos="fade-left" data-aos-delay="0">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className='p-2 space-y-2 sm:space-y-3' data-aos="fade-left" data-aos-delay="200">
          <p className='text-[#666565] text-sm sm:text-base md:text-lg lg:text-[18px]'>
            <FontAwesomeIcon icon={faCheck} className='text-[#00B074] font-[400] mr-2' />
            Expert Job Consultants
          </p>
          <p className='text-[#666565] text-sm sm:text-base md:text-lg lg:text-[18px]'>
            <FontAwesomeIcon icon={faCheck} className='text-[#00B074] font-[400] mr-2' />
            Trusted by Thousands
          </p>
          <p className='text-[#666565] text-sm sm:text-base md:text-lg lg:text-[18px]'>
            <FontAwesomeIcon icon={faCheck} className='text-[#00B074] font-[400] mr-2' />
            24/7 Support
          </p>
        </div>
        <Button className="mt-5 w-full sm:w-auto" btnName="Read More" />
      </div>
    </div>
  )
}

export default HelpfindJob
