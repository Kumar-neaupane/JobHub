import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faHeadset,faUserTie,faListCheck,faChartLine,faHandshake,faBookOpen,faCompassDrafting



} from '@fortawesome/free-solid-svg-icons';

const Categorygrid = () => {
  return (
    <div data-aos="fade-up"  className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 " >
      <div className='categorygrid h-auto min-h-[200px] w-full'>
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-center pb-8">
          Explore By Category
        </h1>
        <div className='gridAnditems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  '>
          <div data-aos="fade-up" data-aos-delay="0" className='item1 flex flex-col mx-[10px] drop-shadow-xl shadow-xl p-4 pb-10 w-full'>

           <FontAwesomeIcon icon={faEnvelope} className='text-[#00B074] mt-4 pb-4 text-[40px]' />
            <h2 className='text-[26px] font-[400]'>Marketing</h2>
            <p>123 Vacancy</p>

          </div>
           <div data-aos="fade-up" data-aos-delay="0" className='item2 flex flex-col mx-[10px] drop-shadow-xl shadow-xl p-4'>
           <FontAwesomeIcon icon={faHeadset} className='text-[#00B074] mt-4 pb-4 text-[40px]' />
            <h2 className='text-[26px] font-[400]'>Customer Service</h2>
            <p>123 Vacancy</p>

          </div>
           <div data-aos="fade-up" data-aos-delay="0" className='item3 flex flex-col mx-[10px] drop-shadow-xl shadow-xl p-4'>

           <FontAwesomeIcon icon={faUserTie} className='text-[#00B074] mt-4 pb-4 text-[40px]' />
            <h2 className='text-[26px] font-[400]'>Human Resource</h2>
            <p>123 Vacancy</p>

          </div>
           <div data-aos="fade-up" data-aos-delay="0" className='item4 flex flex-col mx-[10px] drop-shadow-xl shadow-xl p-4'>

           <FontAwesomeIcon icon={faListCheck} className='text-[#00B074] mt-4 pb-4 text-[40px]' />
            <h2 className='text-[26px] font-[400]'>Project Management</h2>
            <p>123 Vacancy</p>


          </div>
           <div data-aos="fade-up" data-aos-delay="100" className='item5 flex flex-col mx-[10px] drop-shadow-xl shadow-xl p-4  pb-10'>

           <FontAwesomeIcon icon={faChartLine} className='text-[#00B074] mt-4 pb-4 text-[40px]' />
            <h2 className='text-[26px] font-[400]'>Business Development</h2>
            <p>123 Vacancy</p>

          </div>
           <div data-aos="fade-up" data-aos-delay="100" className='item6 flex flex-col mx-[10px] drop-shadow-xl shadow-xl p-4'>
           <FontAwesomeIcon icon={faHandshake} className='text-[#00B074] mt-4 pb-4 text-[40px]' />
            <h2 className='text-[26px] font-[400]'>Sales & Communication</h2>
            <p>123 Vacancy</p>

          </div>
           <div data-aos="fade-up" data-aos-delay="100" className='item7 flex flex-col mx-[10px] drop-shadow-xl shadow-xl p-4'>

           <FontAwesomeIcon icon={faBookOpen} className='text-[#00B074] mt-4 pb-4 text-[40px]' />
            <h2 className='text-[26px] font-[400]'>Teaching & Education</h2>
            <p>123 Vacancy</p>

          </div>
           <div data-aos="fade-up" data-aos-delay="100"className='item8s flex flex-col mx-[10px] drop-shadow-xl shadow-xl p-4'>

           <FontAwesomeIcon icon={faCompassDrafting} className='text-[#00B074] mt-4 pb-4 text-[40px]' />
            <h2 className='text-[26px] font-[400]'>Design & Creative</h2>
            <p>123 Vacancy</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Categorygrid