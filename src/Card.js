
import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { TbClockHour3 } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import telescopeImage from './images/telescope.jpg';

const Card = ({ data }) => {
  return (
    <div className=" mobile:h-56  xs:h-60 xs:w-2/5 mx-auto bg-sky-50 rounded-xl overflow-hidden shadow-lg flex p-5 pr-0  ">
      <div className=' relative  mr-5 h-100 w-56 rounded-3xl  bg-white'>
        {data.favorite && <div className=' h-7 w-7 top-3 right-3 absolute rounded-2xl   overflow-hidden shadow-lg flex items-center justify-center'><IoMdStar size={24} className='text-yellow-400' /></div>}
        <div className='pl-5 pr-2'>
          <img className="w-full  rounded-3xl mt-7" src={telescopeImage} alt="Card" />
        </div>

        <div className="w-4/5 mt-6 ml-5 rounded-full h-1.5 mb-4 bg-gray-100">
          <div style={{ width: data.progress }} className=" bg-sky-300 h-1.5 rounded-full dark:bg-sky-300" ></div>
        </div>

      </div>
      <div className="  ml-3 mr-0 pr-0 w-4/5 rounded-md bg-sky-50 flex justify-between ">
        <div  >
          <div className='bg-white px-3 inline-block rounded-md border border-gray-100 mt-6  mobile:text-xs xs:text-md ' ><p className='font-bold text-orange-500'>After Effects</p></div>
          <div className="md:w-56 font-bold mb-2 text-blue-600  mobile:text-xl md:text-3xl cursor-pointer hover:cursor-pointer   mt-3 ">

            {data.title}
          </div>
          <div className=' mobile:block md:flex md: justify-start  md:mt-6 text-blue-500 font-semibold  mobile:text-xs md:text-sm  '>
            <div className='flex items-center md:mr-3 ml-0'> <FaRegCircleUser size={15} className='m-0 p-0 text-blue-500 mr-1' /><p>{data.name}</p></div>
            <div className='flex items-center md:ml-3 ' > <TbClockHour3 size={18} className='m-0 p-0  text-blue-500 mr-1' /><p>{`${data.timeInMinutes}minutes`} </p></div>
          </div>
        </div>
        <div className='mt-0 mr-5 flex justify-end items-start pt-0 '><BsThreeDots size={24} className='text-blue-700 cursor-pointer hover:cursor-pointer' /></div>
      </div>
    </div>
  );
}

export default Card;
