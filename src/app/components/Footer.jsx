import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SubscribeButton from './SubscribeButton'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className='absolute top-[100%] px-5 pt-5 w-[100%] left-0 bg-red-950'>
      <div className='flex flex-wrap max-[640px]:flex-col'>
        <div className='flex-1'>
          <h1 className='flex font-bold'>
            <p className='text-[#fff] text-[2rem]'>
              The<FontAwesomeIcon icon={faGear}/>Carz
            </p>  
            <img className='w-[80px]'
              src="/photos/Logo.png" alt=""
            />
          </h1>
          <p className='text-[#fff]'>
            Бид таныг Carz дээрээ харахад баяртай байна
          </p>
        </div>
        <div className='flex-1'>
          <SubscribeButton/>
        </div>
      </div>
      <div className='flex flex-wrap justify-between pt-5 md:px-[100px]'>
        
        <div>
          <h4 className="font-bold text-[#fff] pb-2">Бидэнтэй холбоо барих</h4>
          <p className="text-[0.85rem] text-[#fff]">200-111-2222</p>
          <p className="text-[0.85rem] text-[#fff]">(+976)99119911</p>
          <p className="text-[0.85rem] text-[#fff]">ganaa@gmail.com</p>
        </div>
        <div className='flex flex-col'>
          <h4 className="font-bold text-[#fff] pb-2">Хууль эрх зүйн гэрээ</h4>
          <a className='text-[#fff] text-[0.85rem]' href='#'>Нууцлалын бодлого</a>
          <a className='text-[#fff] text-[0.85rem]' href='#'>Үйлчилгээний нөхцөл</a>
        </div>
        <div>
          <h4 className='font-bold text-[#fff] pb-2 pt-4'>Нийгмийн сүлжээ</h4>
          <div className='flex gap-3'>
            <a className='block bg-[#fff] w-10 h-10 flex justify-center items-center
              text-red-900 text-[1.2rem] rounded-[30px]' 
              href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedinIn}/>
            </a>
            <a className='block bg-[#fff] w-10 h-10 flex justify-center items-center
              text-red-900 text-[1.2rem] rounded-[30px]' 
              href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a className='block bg-[#fff] w-10 h-10 flex justify-center items-center
              text-red-900 text-[1.2rem] rounded-[30px]' 
              href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebookF}/>
            </a>
            <a className='block bg-[#fff] w-10 h-10 flex justify-center items-center
              text-red-900 text-[1.2rem] rounded-[30px]' 
              href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
        </div>
        <div>
          <h4 className='font-bold text-[#fff] pb-2 pt-6'>Төлбөр</h4>
          <div className='grid grid-cols-4 gap-2'>
            <div className='sm:w-[60px]  sm:h-[40px] max-[640px]:w-[40px] max-[640px]:h-[30px] 
              rounded-[3px] bg-[#fff] p-1'>
              <img className='w-full h-full'
                src="/partners-images/M-PESA_LOGO-01.svg.png" alt="" />
            </div>
            <div className='sm:w-[60px]  sm:h-[40px] max-[640px]:w-[40px] max-[640px]:h-[30px] 
              rounded-[3px] bg-[#fff] p-1'>
              <img className='sm:w-full sm:h-full'
                src="/partners-images/Mastercard-logo.svg.png" alt="" />
            </div>
            <div className='sm:w-[60px]  sm:h-[40px] max-[640px]:w-[40px] max-[640px]:h-[30px] 
              rounded-[3px] bg-[#fff] p-1'>
              <img className='w-full h-full'
                src="/partners-images/visa-svgrepo-com.svg" alt="" />
            </div>
            <div className='sm:w-[60px]  sm:h-[40px] max-[640px]:w-[40px] max-[640px]:h-[30px] 
              rounded-[3px] bg-[#fff] p-1'>
              <img className='w-full h-full'
                src="/partners-images/Google_Pay_Logo.svg.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}