import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReportMain = () => {

  return (
    <div className='pt-16 w-auto h-auto flex items-center flex-col gap-5'> 
        <div className='w-3/4 h-auto flex justify-between'> 
            <div className='bg-navbar h-auto w-96 flex flex-col items-center rounded-br-index2 pt-10'>
                <div className='w-4/6 h-auto  pt-6 pb-40 flex flex-col gap-4 text-white '>
                    <div className=''>ติดต่อสำนักงาน</div>
                    <div className='w-full flex flex-col items-center gap-3'> 
                        <div className='bg-gray-200 w-5/6 h-4'></div>
                        <div className='bg-gray-200 w-5/6 h-4'></div>
                        <div className='bg-gray-200 w-5/6 h-4'></div>
                    </div>
                    <div className='py-3'>เว็บไซต์เลือกตั้ง</div>
                    <div className=' flex flex-col gap-1'>
                        <div>แบบฟอร์มรายงานผู้กระทำผิด</div>
                        <div className='w-full flex flex-col items-start ml-4'><div className=' bg-buttonmainbgcolr w-4/6 h-1'></div></div>
                    </div>
                </div>
            </div>
            <div className='bg-white h-auto w-3/4 flex justify-end items-end'>
                <div className='w-10/12 h-auto  flex flex-col gap-4 mx-4 my-6'>
                    <div className='w-full h-auto flex justify-end items-center gap-4'>
                        <div className='text-black'>รายงานผู้กระทำผิด</div>
                        <input className='input bg-background w-1/2 focus:outline-none focus:border-black h-10 border-black border text-black' placeholder='กรอกที่เกิดเหตุ รหัสไปรษณีย์ ,เขต ,จังหวัด'/>
                    </div>
                    <div className='w-full h-auto flex justify-end'>
                        <div className='w-3/12  text-black flex justify-end pr-4 pt-1'>
                            <div className='relative top-2 left-'>ข้อมูลผู้แจ้งเบาะแส</div></div>
                        <div className='w-8/12 h-auto mr-2  flex flex-col gap-3 text-black'>
                            <div className='gap-2 flex '>
                                <input className='input bg-background w-1/3 focus:outline-none focus:border-white h-11 rounded-2xl ' placeholder='คำนำหน้า'/>
                                <input className='input bg-background w-2/3 focus:outline-none focus:border-white h-11 rounded-2xl ' placeholder='ชื่อจริง'/>
                            </div>
                            <div className='gap-2 flex '>
                                <input className='input bg-background w-1/2 focus:outline-none focus:border-white h-11 rounded-2xl ' placeholder='ชื่อกลาง'/>
                                <input className='input bg-background w-1/2 focus:outline-none focus:border-white h-11 rounded-2xl ' placeholder='นามสกุล'/>
                            </div>
                            <div className='gap-2 flex '>
                                <input className='input bg-background w-full focus:outline-none focus:border-white h-11 rounded-2xl ' placeholder='Email'/>
                            </div>
                            <div className='gap-2 flex '>
                                <input className='input bg-background w-full focus:outline-none focus:border-white h-11 rounded-2xl ' placeholder='เลขบัตรประชาชน'/>
                            </div>
                            <div className='gap-2 flex '>
                                <input className='input bg-background w-3/12 focus:outline-none focus:border-white h-11 rounded-2xl ' placeholder='เลือกข้อมูล'/>
                                <input className='input bg-background w-3/4 focus:outline-none focus:border-white h-11 rounded-2xl ' placeholder='เบอร์โทรศัพท์'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-3/4 h-auto bg-cream gap-4 px-6 py-5 flex rounded-3xl'>
            <div className='w-1/3 flex pt-10 flex-col items-center '>
                <div className='w-9/12 h-48 bg-background mt-8 border-black border flex justify-center items-center'>
                    <div className=''>MP4 ขนาดไม่เกิน 100 Mb</div>
                </div>
                <div className='text-black'>VDO หลักฐาน</div>
            </div>
            <div className='w-2/3 h-auto  gap-5 flex flex-col'>
                <div className='h-64 w-full bg-white rounded-3xl flex-col flex py-4 px-4 '>
                    <div className='w-full h-auto '> 
                        <input className=' text-black input bg-white w-full h-full focus:border-white focus:outline-none' placeholder='แจ้งรายละเอียด...'/>
                        <div>แจ้งรายละเอียด...</div>
                    </div>
                    <div className='flex items-end bg-white w-full h-full '>
                        <div className='w-full h-auto  flex justify-end'> 
                            <div>0/2000</div>
                        </div>
                    </div>
                </div>
                <div className='h-12 w-full bg-white rounded-full flex items-center justify-center'>แนบรูป ชื่อไฟล์ .JPG .PNG ขนาดไม่เกิน 5Mb</div>
            </div>
        </div>
    </div>
  );
};

export default ReportMain;