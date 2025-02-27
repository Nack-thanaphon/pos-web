"use client"
import ExampleTable from '@/shared//components/Table';
import React from 'react';
import Navbar from '@/shared/components/Navbar';

const Page = () => {
ExampleTable
  return (
    <div className='max-w-7xl mx-auto p-4 gap-3 lg:flex'>
      <Navbar />
      <div className='h-screen bg-white rounded-[10px] p-3 flex-1'>
        <div className="my-3">
          <p className='w-fit px-3 '>แดชบอร์ด</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-blue-400 p-3 py-5 rounded-sm w-full">
            <div className="text-xs text-white">จำนวนออเดอร์</div>
            <div className="text-5xl font-bold text-white mt-1">100</div>
          </div>
          <div className="bg-blue-700 p-3 py-5 rounded-sm w-full">
            <div className="text-xs text-white">จำนวนสินค้า</div>
            <div className="text-5xl font-bold text-white mt-1">100</div>
          </div>
          <div className="bg-blue-300 p-3 py-5 rounded-sm w-full">
            <div className="text-xs text-white">จำนวน supplier</div>
            <div className="text-5xl font-bold text-white mt-1">100</div>
          </div>
        </div>
      </div>
      {/* <ExampleTable /> */}
    </div>
  );
};

export default Page;