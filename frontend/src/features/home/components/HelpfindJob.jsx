import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import groupimage from '../../../assets/images/groupimage.jpg'
import groupimage2 from '../../../assets/images/groupimage2.jpg'
import groupimage3 from '../../../assets/images/groupimage3.jpg'
import group4 from '../../../assets/images/group4.jpg'
import{faCheck}from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';

const HelpfindJob = () => {
  return (
    <div className='mx-16 flex flex-row gap-10 mt-[100px] shadow-2xl'data-aos="fade-up" data-aos-delay="100" >
      <div className='imageSection flex flex-row'>
      <div className='upperImage'>
        <img src={groupimage} alt="Help find job" className='h-[300px] object-cover' />
        <img src={groupimage2} alt="Help find job" className='h-[350px] w-[400px]  object-cover' />
        </div>
        <div className='secondPart '>
        <img src={groupimage3} alt="Help find job" className='h-[300px] object-cover' />
        <img src={group4} alt="Help find job" className='h-[300px] w-[400px] -ml-13 object-cover' />
        </div>
      </div>
      <div className='textAndButtons mt-13 w-2xl ml-[70px] ' >
      <div className='mb-9'>
        <h1 className='text-[40px] font-[900] text-[#2B3940]'>We Help To Get The Best Job And Find A Talent</h1>
        </div>
        <p className='text-[#666565] text-[18px] mb-5'data-aos="fade-left" data-aos-delay="0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <div className='p-2' data-aos="fade-left" data-aos-delay="200">
        <p className='text-[#666565] text-[18px]' ><FontAwesomeIcon icon={faCheck} className='text-[#00B074] font-[400]'/> Expert Job Consultants</p>
        <p className='text-[#666565] text-[18px]' ><FontAwesomeIcon icon={faCheck} className='text-[#00B074] font-[400]'/> Trusted by Thousands</p>
        <p className='text-[#666565] text-[18px]' ><FontAwesomeIcon icon={faCheck} className='text-[#00B074] font-[400]'/> 24/7 Support</p>
      </div>
      <Button className="mt-5" btnName="Read More " />
      </div>
      
    </div>
  )
}

export default HelpfindJob
