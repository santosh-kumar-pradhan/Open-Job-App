
import React from 'react'
import { skills } from '../../../utils/constant';
import moment from 'moment'
import { SlCalender } from "react-icons/sl";
import { MdOutlineWork } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { MdPublish } from "react-icons/md";

const JobCard = ({data}) => {
  return (
    <div className='flex items-start gap-x-2  w-full  border border-transparent hover:border-indigo-500 transition-all duration-300 px-5 py-3 rounded-md'>

                <div className="">
                    <img src={data.company_profile_pic} alt="" className="rounded-full h-12  w-12  bg-gray-300 p-2 object-cover" />
                </div>
                <div className="">
                    <h1 className='text-xl font-bold'>{data.company_name}</h1>
                    <span className='text-sm font-medium text-gray-900'>{data.title}</span>
                    <ul className="flex items-center gap-x-2 rounded-md flex-wrap gap-y-3 py-3  ">
                            
                    {
                        data.skills.map((cur,i)=>{
                            return <li key={i} className='text-xs text-gray-700 px-3 py-1 bg-gray-300 rounded'>{cur}</li>
                        })
                    }
                            </ul> 
                            <p className="flex items-center gap-x-2">
                                <MdPublish/> <span>{moment(data.createdAt).format('ll')}</span>
                                </p> 
                            <p className="flex items-center gap-x-2">
                                <SlCalender/> <span>{moment(data.extend_date).format('ll')}</span>
                                </p>  
                                <p className="flex items-center gap-x-2">
                                <MdOutlineWork/> <span>{data.job_type}</span>
                                </p>  

                                <div className="mb-3 w-full">
                                   <p className="text-end">
                                   <a href={data.job_url} target='_blank' className='text-indigo-500  flex justify-end items-center '>Apply <GoArrowUpRight/> </a>
                                   </p>
                                </div>
                         
    
                </div>

    </div>
  )
}

export default JobCard