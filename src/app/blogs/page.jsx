import React from 'react';
import Blogs from './Blogs';
import { blogsBannerData, blogsData } from '../../../data/data';

async function getBlogs() {
  // Өгөгдлийг татаж авах логик энд орно
  return blogsData;
}

export default async function blogs() {
  const blogs = await getBlogs();
  return (
    <div className='blogs-wrapper'>
      <div className='pt-2'>
        {blogsBannerData.map(blogBannerData => (
          <div className='flex flex-wrap max-[670px]:flex-col'
            key={blogBannerData.id}>
            <div className='relative flex-1 w-full h-[30%]'>
              <img className='w-full h-full'
                src={blogBannerData.imageBanner1} alt=""
              />
              <div className='absolute top-0 left-0 w-full h-full flex justify-center
                items-center'>
                  <h3 className='heading'>
                    {blogBannerData.heading}
                  </h3>
                </div>
            </div>
            <div className='relative flex-1'>
              <img className='w-full'
                src={blogBannerData.imageBanner2} alt=""
              />
              <div className='absolute top-0 left-0 w-full h-full flex justify-center
                items-center'>
                <p className='text-[#fff] font-medium max-[640px]:px-2 sm:px-5'>
                  {blogBannerData.paragraph}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className='text-center pt-4 text-red-900 font-extrabold sm:text-[1.8rem]'>
          МЭДЭЭЛЭЛТЭЙ БАЙ
        </h2>
        <h3 className='text-center pb-4 text-red-950 font-bold'>
          АВТОМОБИЛИЙН ДЭЛХИЙД БОЛЖ БУЙ ТӨРӨЛТҮҮДИЙН ТУХАЙ
        </h3>
        <ul className='lg:px-[120px] max-[1024px]:px-[15px] flex flex-col gap-[2rem]
          pb-16'>
          {(blogs).map(blog => (
            <li key={blog.id}>
              <Blogs blog={blog}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}