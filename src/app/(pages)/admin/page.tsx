"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='max-w-7xl mx-auto p-4 gap-3 flex'>
      <div className={`h-full bg-white rounded-[10px] p-3 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-1/4`}>
        <div className="flex flex-col items-center justify-center py-3">
          <div className="w-[80px] h-[80px] rounded-[50%] overflow-hidden flex items-center">
            <Image src={"/image/profile.jpg"} width={550} height={550} alt='' className='w-full h-full  object-cover' />
          </div>
          <div className="py-3 text-center">
            <p className='text-2xl'>nack</p>
            <p className='w-fit px-3 bg-blue-400 rounded-lg'>admin</p>
          </div>
          <button onClick={toggleMenu} className='mt-3 bg-gray-200 p-2 rounded-lg lg:hidden'>
            {isMenuOpen ? 'Hide Menu' : 'Show Menu'}
          </button>
        </div>
        <div className="mt-3">
          <ul className="space-y-2 text-center">
            <li className="p-2 py-3 bg-gray-100 rounded-lg">จัดการออเดอร์</li>
            <li className="p-2 py-3 bg-gray-100 rounded-lg">จัดการเมนู</li>
            <li className="p-2 py-3 bg-gray-100 rounded-lg">จัดการเจ้าหน้าที่</li>
            <li className="p-2 py-3 bg-gray-100 rounded-lg">Log ผู้ใช้งาน</li>
            <hr />
            <li className="p-2 py-3 bg-red-400 rounded-lg">ออกจากระบบ</li>

          </ul>
        </div>
      </div>
      <div className='h-screen bg-white rounded-[10px] p-3 flex-1'>
        <div className="my-3">
          <p className='w-fit px-3 '>แดชบอร์ด</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-blue-300 p-3 py-5 rounded-sm w-full">
            <div className="text-xs text-white">จำนวนสินค้า</div>
            <div className="text-5xl font-bold text-white mt-1">100</div>
          </div>
          <div className="bg-blue-300 p-3 py-5 rounded-sm w-full">
            <div className="text-xs text-white">จำนวนสินค้า</div>
            <div className="text-5xl font-bold text-white mt-1">100</div>
          </div>
          <div className="bg-blue-300 p-3 py-5 rounded-sm w-full">
            <div className="text-xs text-white">จำนวนสินค้า</div>
            <div className="text-5xl font-bold text-white mt-1">100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;